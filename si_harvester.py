import json
import time
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# --- CONFIGURATION ---
MAIN_SI_URL = "https://www.smc.edu/student-support/academic-support/supplemental-instruction/schedule.php"
OUTPUT_PATH = "./src/data/siSchedule.json"

# Subjects to scrape
TARGET_SUBJECTS = [ "Accounting",
    "Anatomy",
    "Biology",
    "Chemistry",
    "Computer Science",
    "Economics",
    "Engineering",
    "English",
    "Japanese",
    "Math",
    "Physics",
    "Spanish",
]

def normalize_room_id(raw_text):
    """Extracts a room key from location text like 'MSB 101' or 'SCI 159'.
    MSB rooms return 'room-{number}' for backward compatibility.
    Other buildings return '{building_lower}-{number}'.
    Returns None if no building/room pattern is found."""
    # Map website abbreviations to app prefixes
    BUILDING_ALIASES = {
        "DH": "drschr",   # Drescher Hall
    }
    match = re.search(r"([A-Z]+)\s+(\d+[a-zA-Z]?)", raw_text)
    if not match:
        return None
    building = match.group(1)
    number = match.group(2)
    if building == "MSB":
        return f"room-{number}"
    prefix = BUILDING_ALIASES.get(building, building.lower())
    return f"{prefix}-{number}"

def parse_si_time(time_str):
    # Normalize dashes and spaces
    clean_str = re.sub(r"[—–-]", "-", time_str).strip()
    
    # Try Format 1: Each time has its own meridiem
    # e.g. "Monday 4:30 p.m. - 5:30 p.m."
    match = re.search(
        r"^([A-Za-z]+)\s+(\d{1,2}(?::\d{2})?)\s*([ap]\.?m\.?)\s*-\s*(\d{1,2}(?::\d{2})?)\s*([ap]\.?m\.?)",
        clean_str, re.IGNORECASE
    )
    
    if match:
        day_full = match.group(1)
        start_raw = match.group(2)
        start_meridiem = match.group(3).replace(".", "").lower()
        end_raw = match.group(4)
        end_meridiem = match.group(5).replace(".", "").lower()
    else:
        # Format 2: Single meridiem at end
        # e.g. "Monday 12:30 - 1:30 p.m." or "Tue 8:00 - 9:00 a.m."
        match = re.search(
            r"^([A-Za-z]+)\s+(\d{1,2}(?::\d{2})?)\s*-\s*(\d{1,2}(?::\d{2})?)\s*([ap]\.?m\.?)",
            clean_str, re.IGNORECASE
        )
        if not match:
            return None, None, None

        day_full = match.group(1)
        start_raw = match.group(2)
        end_raw = match.group(3)
        end_meridiem = match.group(4).replace(".", "").lower()

        # Infer start meridiem from end meridiem
        start_hour = int(start_raw.split(":")[0]) if ":" in start_raw else int(start_raw)
        
        # If end is PM and start hour is 8-11, the session spans AM→PM (e.g. "11:30 - 12:30 p.m.")
        if "pm" in end_meridiem and 8 <= start_hour <= 11:
            start_meridiem = "am"
        else:
            start_meridiem = end_meridiem

    days_map = {
        "Monday": "Mon", "Tuesday": "Tue", "Wednesday": "Wed", 
        "Thursday": "Thu", "Friday": "Fri", "Saturday": "Sat", "Sunday": "Sun"
    }
    # Handle partial matches and typos like "Wendesday"
    day_short = None
    for full, short in days_map.items():
        if full.lower().startswith(day_full.lower()[:2]):
            day_short = short
            break
            
    if not day_short: return None, None, None

    def convert(t, m):
        if ":" not in t: t += ":00"
        h, min_ = map(int, t.split(":"))
        if "pm" in m and h != 12: h += 12
        if "am" in m and h == 12: h = 0
        return f"{h:02d}:{min_:02d}"
        
    return day_short, convert(start_raw, start_meridiem), convert(end_raw, end_meridiem)

def scrape_si_sessions():
    options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
    si_data = {}
    
    try:
        print(f"🌍 Navigating to Main SI Page...")
        driver.get(MAIN_SI_URL)
        time.sleep(2)
        
        subject_urls = {}
        for subject in TARGET_SUBJECTS:
            try:
                # Find link by partial text (e.g. "Math")
                links = driver.find_elements(By.PARTIAL_LINK_TEXT, subject)
                if links:
                    subject_urls[subject] = links[0].get_attribute("href")
                    print(f"   🔗 Found link for {subject}")
            except:
                print(f"   ⚠️ No link found for {subject}")

        for subject, url in subject_urls.items():
            print(f"🔍 Scraping {subject}...")
            driver.get(url)
            time.sleep(2)
            
            # Find ALL rows in the table
            rows = driver.find_elements(By.CSS_SELECTOR, "table tbody tr")
            print(f"   Found {len(rows)} potential rows.")
            
            valid_rows = 0
            for row in rows:
                try:
                    # --- THE FIX: Get ALL children (th OR td) ---
                    # Previously we only asked for "td", which missed the first column
                    cells = row.find_elements(By.XPATH, "./*")
                    
                    if len(cells) < 4: 
                        continue
                    
                    # Extract Text
                    class_name = cells[0].text.strip()
                    leader = cells[1].text.strip()
                    times_text = cells[2].text.strip()
                    locs_text = cells[3].text.strip()
                    
                    # Skip Header Rows
                    if "SESSION TIMES" in times_text or "LOCATION" in locs_text:
                        continue
                        
                    valid_rows += 1
                    
                    # --- PROCESSING ---
                    time_lines = times_text.split("\n")
                    loc_lines = locs_text.split("\n")
                    
                    # Logic: If only 1 location is listed (e.g. "MSB 206"), apply it to ALL times
                    use_single_loc = len(loc_lines) == 1 and len(time_lines) >= 1
                    
                    for i, time_str in enumerate(time_lines):
                        if not time_str.strip(): continue
                        
                        # Match Time to Location
                        if use_single_loc:
                            loc_str = loc_lines[0]
                        elif i < len(loc_lines):
                            loc_str = loc_lines[i]
                        else:
                            continue 
                        
                        # Filter Room (Must be MSB or SCI)
                        room_key = normalize_room_id(loc_str)
                        if not room_key: 
                            continue
                        
                        # Parse Time
                        day, start, end = parse_si_time(time_str)
                        if not start or not end:
                            print(f"      ❌ Failed to parse time: '{time_str}'")
                            continue
                        
                        # Add Data
                        if room_key not in si_data:
                            si_data[room_key] = {
                                "type": "CLASSROOM", 
                                "label": loc_str,
                                "events": []
                            }
                        
                        # Avoid duplicates
                        new_event = {
                            "day": day,
                            "start": start,
                            "end": end,
                            "title": "SI Session",
                            "courseName": f"SI: {class_name}",
                            "professor": f"Leader: {leader}",
                            "status": "SI_SESSION"
                        }
                        
                        # Check if event exists
                        exists = False
                        for e in si_data[room_key]["events"]:
                            if e["day"] == day and e["start"] == start:
                                exists = True
                                break
                        
                        if not exists:
                            si_data[room_key]["events"].append(new_event)
                            print(f"      ✅ Added SI: {class_name} @ {room_key} ({day} {start}-{end})")
                        
                except Exception as e:
                    print(f"Error processing row: {e}")
                    continue

            if valid_rows == 0:
                print("   ⚠️ WARNING: No valid data rows found on this page.")

    finally:
        driver.quit()

    print(f"💾 Saving SI Sessions for {len(si_data)} rooms to {OUTPUT_PATH}...")
    with open(OUTPUT_PATH, "w") as f:
        json.dump(si_data, f, indent=2)
    print("✅ Done!")

if __name__ == "__main__":
    scrape_si_sessions()