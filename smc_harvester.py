import json
import time
import re
import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import StaleElementReferenceException
from webdriver_manager.chrome import ChromeDriverManager

# --- CONFIGURATION ---
URL = "https://smccis.smc.edu/smcweb/f?p=373:1::::::"
OUTPUT_PATH = "./src/data/roomSchedule_LIVE.json"

# IDs (Keep the ones you found working!)
SEMESTER_DROPDOWN_ID = "P1_SEMCODE"

# MSB rooms keep the legacy "room-{number}" format for map compatibility.
# All other buildings use "{building_lower}-{number}" format.

def normalize_room_id(raw_text):
    """Extracts a room key from location text like 'MSB 101' or 'HSS 104'.
    MSB rooms return 'room-{number}' for backward compatibility.
    Other buildings return '{building_lower}-{number}'.
    Returns None if no building/room pattern is found."""
    # Clean up non-ASCII characters (like the \ue55f icon)
    raw_text = re.sub(r'[^\x00-\x7F]+', '', raw_text).strip()
    
    # 1. Handle special named rooms (Theatre Arts specific)
    NAMED_ROOMS = {
        "TH ART STUDIO": "th_art-128",
        "TH ART MAIN STAGE": "th_art-142",
        "TH ART MAIN STG": "th_art-142", # Handle abbreviation
    }
    if raw_text in NAMED_ROOMS:
        return NAMED_ROOMS[raw_text]

    # Map website abbreviations to app prefixes
    BUILDING_ALIASES = {
        "DH": "drschr",   # Drescher Hall
        "TH ART": "th_art", # Theatre Arts (Separate building)
        "ART": "a",       # Art
        "A": "a",         # Art (short form)
        "MALIBU": "malibu",
        "BUNDY": "bundy"
    }
    # Match building (can have spaces) and room number
    # Use (.+) to capture multi-word building names before the room number
    match = re.search(r"(.+)\s+(\d+[a-zA-Z]?)", raw_text)
    if not match:
        return None
    building = match.group(1).strip()
    number = match.group(2)
    if building == "MSB":
        return f"room-{number}"
    prefix = BUILDING_ALIASES.get(building, building.lower())
    return f"{prefix}-{number}"

def parse_schedule(schedule_text):
    """
    Parses 'MW 7:45 a.m.-9:50 a.m.' OR 'MW 9 a.m.-11:25 a.m.'
    """
    if not schedule_text or schedule_text == "-":
        return None, None, None

    # 1. Extract Days (M, T, W, Th, F, S, Su)
    days_map = {"M": "Mon", "T": "Tue", "W": "Wed", "Th": "Thu", "F": "Fri", "S": "Sat", "Su": "Sun"}
    active_days = []
    
    # Handle "Th" and "Su" first
    temp_text = schedule_text
    if "Th" in temp_text:
        active_days.append("Thu")
        temp_text = temp_text.replace("Th", "")
    if "Su" in temp_text:
        active_days.append("Sun")
        temp_text = temp_text.replace("Su", "")
        
    for char in ["M", "T", "W", "F", "S"]:
        # Only check the first chunk of text (the days part)
        if char in temp_text.split(" ")[0]: 
            active_days.append(days_map[char])

    # 2. Extract Time (Updated Regex to allow optional minutes)
    # Looking for: "9" OR "9:30" followed by "a.m." or "p.m."
    # Regex breakdown: \d{1,2} (digits) + optional (:\d{2}) + space? + [ap].m.
    time_regex = r"(\d{1,2}(?::\d{2})?\s?[ap]\.m\.)\s?-\s?(\d{1,2}(?::\d{2})?\s?[ap]\.m\.)"
    
    time_match = re.search(time_regex, schedule_text)
    if not time_match:
        return active_days, None, None

    def to_24h(t_str):
        try:
            import datetime
            t_str = t_str.replace(".", "").upper().strip()
            
            # If minutes are missing (e.g., "9 AM"), add ":00"
            if ":" not in t_str:
                parts = t_str.split(" ")
                t_str = f"{parts[0]}:00 {parts[1]}"
                
            dt = datetime.datetime.strptime(t_str, "%I:%M %p")
            return dt.strftime("%H:%M")
        except:
            return None

    return active_days, to_24h(time_match.group(1)), to_24h(time_match.group(2))

def get_target_term():
    """Determine the correct semester based on the current date, respecting transition cutoffs."""
    now = datetime.datetime.now()
    month = now.month
    day = now.day
    year = now.year

    if month == 1 or (month == 2 and day <= 15):
        term = "Winter"
    elif (month == 2 and day > 15) or month in [3, 4, 5] or (month == 6 and day <= 15):
        term = "Spring"
    elif (month == 6 and day > 15) or month == 7 or (month == 8 and day <= 15):
        term = "Summer"
    else:
        term = "Fall"
        
    return f"{term} {year}"

def scrape_smc_live():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    options.add_argument("--disable-gpu")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    wait = WebDriverWait(driver, 10)

    scraped_data = {}
    
    try:
        print(f"🌍 Navigating to {URL}...")
        driver.get(URL)
        wait.until(EC.presence_of_element_located((By.ID, SEMESTER_DROPDOWN_ID)))

        print("📅 Selecting Semester...")
        term_select = Select(driver.find_element(By.ID, SEMESTER_DROPDOWN_ID))
        
        target_term = get_target_term()
        print(f"   🎯 Looking for target semester: {target_term!r}")
        
        # Try to select the specific target term based on the current date
        found = False
        for option in term_select.options:
            if option.text == target_term:
                term_select.select_by_visible_text(target_term)
                found = True
                break
                
        # If the target term isn't an option (e.g., schedule not out yet), fallback to index 0
        if not found:
            print(f"   ⚠️ Target term {target_term!r} not found in dropdown. Falling back to default.")
            term_select.select_by_index(0)
            
        selected_term = term_select.first_selected_option.text
        print(f"   ✓ Selected semester: {selected_term!r}")
        time.sleep(1)

        # Expand the "Advanced" collapsible section
        print("📂 Expanding Advanced Search options...")
        try:
            adv_btn = wait.until(EC.element_to_be_clickable(
                (By.CSS_SELECTOR, "span.t-Button.t-Button--icon.t-Button--hideShow")
            ))
            adv_btn.click()
            time.sleep(1)
        except:
            print("⚠️ Could not find Advanced toggle, continuing anyway...")

        # Select specific locations in the filter
        locations = {
            "Main Campus": "P1_LOCATION_5",
            "Bundy Campus": "P1_LOCATION_1",
            "Malibu Campus": "P1_LOCATION_6"
        }

        for loc_name, loc_id in locations.items():
            print(f"📍 Selecting {loc_name!r} location...")
            try:
                cb = wait.until(EC.element_to_be_clickable((By.ID, loc_id)))
                if not cb.is_selected():
                    driver.execute_script("arguments[0].click();", cb)
                time.sleep(0.5)
            except:
                print(f"⚠️ Could not find {loc_name!r} checkbox, skipping...")

        # No subject selected = all subjects. Just click Search.
        print("🔍 Searching ALL classes (no subject filter)...")
        try:
            search_btn_xpath = "//button[.//span[text()='Search']]"
            search_btn = wait.until(EC.element_to_be_clickable((By.XPATH, search_btn_xpath)))
            search_btn.click()
        except:
            driver.execute_script("arguments[0].click();", driver.find_element(By.XPATH, "//button[.//span[text()='Search']]"))
        
        print("⏳ Waiting for results table...")
        wait.until(EC.presence_of_element_located(
            (By.XPATH, "//table[.//th[contains(., 'Course Name')]]/tbody/tr")
        ))
        time.sleep(1)  # Brief settle
        
        # --- PAGINATION LOOP ---
        page_num = 1
        dropped_locations = set()
        while True:
            # 1. Find the Data Table
            xpath_selector = "//table[.//th[contains(., 'Course Name')]]/tbody/tr"
            rows = driver.find_elements(By.XPATH, xpath_selector)
            
            print(f"   [Page {page_num}] Found {len(rows)} rows. Processing...")

            # 2. Scrape Rows
            for row in rows:
                try:
                    cells = row.find_elements(By.TAG_NAME, "td")
                    if len(cells) < 10: continue

                    course_code = cells[0].text.strip()
                    course_title = cells[2].text.strip()
                    schedule_text = cells[5].text.strip()
                    location_text = cells[8].text.strip()
                    # Clean up non-ASCII characters (like the \ue55f icon) for both the key and the label
                    location_text = re.sub(r'[^\x00-\x7F]+', '', location_text).strip()
                    
                    instructor = cells[9].text.strip()
                    
                    room_key = normalize_room_id(location_text)
                    if not room_key:
                        if location_text not in dropped_locations:
                            dropped_locations.add(location_text)
                            print(f"   ⏭️  Skipped row (no building/room match): {location_text!r}")
                        continue

                    days, start, end = parse_schedule(schedule_text)
                    if not start or not end: 
                        print(f"   ❌ Skipped '{course_code}' (Time: {schedule_text} is invalid/online)")
                        continue

                    if room_key not in scraped_data:
                        scraped_data[room_key] = {
                            "type": "CLASSROOM",
                            "label": location_text,
                            "events": []
                        }

                    for day in days:
                        new_event = {
                            "day": day, "start": start, "end": end,
                            "title": course_code, "courseName": course_title,
                            "professor": instructor, "status": "OCCUPIED"
                        }
                        # Basic duplicate check
                        if new_event not in scraped_data[room_key]["events"]:
                            scraped_data[room_key]["events"].append(new_event)
                except Exception as e:
                    print(f"   ⚠️ Row error: {e}")
                    continue

            # 3. Check for "Next" Button
            try:
                next_btn = driver.find_element(By.XPATH, "//a[contains(@class, 't-Report-paginationLink--next')]")
                
                if next_btn.is_displayed():
                    # Grab a reference to a current row so we can detect when it goes stale
                    old_first_row = rows[0] if rows else None
                    print(f"   ➡️ Next Page ({page_num + 1})...")
                    driver.execute_script("arguments[0].click();", next_btn)
                    
                    # Smart wait: poll until the old row becomes stale (table refreshed)
                    if old_first_row:
                        for _ in range(50):  # up to 5 seconds
                            try:
                                old_first_row.text  # Will throw if stale
                                time.sleep(0.1)
                            except StaleElementReferenceException:
                                break
                        time.sleep(0.3)  # Brief settle after refresh
                    else:
                        time.sleep(2)
                    
                    page_num += 1
                else:
                    break # End of pages
            except StaleElementReferenceException:
                time.sleep(1)
                page_num += 1
            except:
                print(f"   ✅ End of results. Total pages: {page_num}")
                break
            
    except Exception as e:
        print(f"❌ Critical Error: {e}")
        
    finally:
        driver.quit()
        
    if scraped_data:
        print(f"💾 Saving {len(scraped_data)} rooms to {OUTPUT_PATH}...")
        with open(OUTPUT_PATH, "w") as f:
            json.dump(scraped_data, f, indent=2)
        print("✅ Done!")
    else:
        print(f"⚠️ Scrape produced 0 rooms — leaving existing {OUTPUT_PATH} untouched.")

if __name__ == "__main__":
    scrape_smc_live()