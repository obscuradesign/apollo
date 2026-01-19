import json
import time
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# --- CONFIGURATION ---
URL = "https://smccis.smc.edu/smcweb/f?p=373:1::::::"
OUTPUT_PATH = "./src/data/roomSchedule_LIVE.json"

# IDs (Keep the ones you found working!)
SEMESTER_DROPDOWN_ID = "P1_SEMCODE" 
SUBJECT_LIST_ID = "P1_SUBJECTS" 

# Full list of relevant subjects to check
TARGET_SUBJECTS = [
    "Anthropology", "Astronomy", "Biological Sciences", "Chemistry", 
    "Engineering", "Geography", "Geology", "Global Studies", 
    "Mathematics", "Nutrition", "Physics", "Science - General Studies", 
    "Sustainable Materials Management"
]

def normalize_room_id(raw_text):
    if "MSB" not in raw_text:
        return None
    match = re.search(r"(?:MSB)\s+(\d+[a-zA-Z]?)", raw_text)
    if match:
        return f"room-{match.group(1)}"
    return None

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

def scrape_smc_live():
    options = webdriver.ChromeOptions()
    # options.add_argument("--headless") 
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    wait = WebDriverWait(driver, 10)

    scraped_data = {}
    
    try:
        print(f"🌍 Navigating to {URL}...")
        driver.get(URL)
        time.sleep(3) 

        print("📅 Selecting Semester...")
        term_select = Select(driver.find_element(By.ID, SEMESTER_DROPDOWN_ID))
        term_select.select_by_index(0) 
        time.sleep(2)

        for subject in TARGET_SUBJECTS:
            print(f"🔍 Selecting Subject: {subject}...")
            
            # Select Subject
            subject_select = Select(driver.find_element(By.ID, SUBJECT_LIST_ID))
            try:
                subject_select.deselect_all()
                subject_select.select_by_visible_text(subject)
            except:
                print(f"⚠️ Could not find '{subject}', skipping.")
                continue

            # Click Search
            try:
                search_btn_xpath = "//button[.//span[text()='Search']]"
                search_btn = wait.until(EC.element_to_be_clickable((By.XPATH, search_btn_xpath)))
                search_btn.click()
            except:
                driver.execute_script("arguments[0].click();", driver.find_element(By.XPATH, "//button[.//span[text()='Search']]"))
            
            print("⏳ Waiting for results table...")
            time.sleep(4) 
            
            # --- PAGINATION LOOP STARTS HERE ---
            page_num = 1
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
                        instructor = cells[9].text.strip()
                        
                        # --- DEBUGGING START ---
                        room_key = normalize_room_id(location_text)
                        if not room_key: 
                            print(f"   ❌ Skipped '{course_code}' (Location: {location_text} is not MSB/SCI)")
                            continue 

                        days, start, end = parse_schedule(schedule_text)
                        if not start or not end: 
                            print(f"   ❌ Skipped '{course_code}' (Time: {schedule_text} is invalid/online)")
                            continue
                    # --- DEBUGGING END ---

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
                    except:
                        continue

                # 3. Check for "Next" Button
                try:
                    # UPDATED SELECTOR based on your screenshot
                    next_btn = driver.find_element(By.XPATH, "//a[contains(@class, 't-Report-paginationLink--next')]")
                    
                    # If visible, click it
                    if next_btn.is_displayed():
                        print("   ➡️ Next Page...")
                        # Javascript click is safer for anchors in APEX
                        driver.execute_script("arguments[0].click();", next_btn)
                        time.sleep(5) # Wait for table reload
                        page_num += 1
                    else:
                        break # End of pages
                except:
                    # No "Next" link found, we are on the last page
                    print("   ✅ End of results for this subject.")
                    break
            
    except Exception as e:
        print(f"❌ Critical Error: {e}")
        
    finally:
        driver.quit()
        
    print(f"💾 Saving {len(scraped_data)} rooms to {OUTPUT_PATH}...")
    with open(OUTPUT_PATH, "w") as f:
        json.dump(scraped_data, f, indent=2)
    print("✅ Done!")

if __name__ == "__main__":
    scrape_smc_live()