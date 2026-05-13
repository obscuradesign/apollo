<div align="center">
  <br />
  <h1>Apollo</h1>
  <h3>The Santa Monica College Interactive Campus Map</h3>
  <p>
    <strong>Find empty classrooms, track live lectures, and locate SI Sessions in real-time.</strong>
  </p>

  <p>
    <a href="https://apollo.kevindavidson.work"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/obscuradesign/apollo/issues">Report Bug</a>
    ·
    <a href="https://github.com/obscuradesign/apollo/issues">Request Feature</a>
  </p>

  <br />

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
  ![Accessibility](https://img.shields.io/badge/WCAG_2.2_AA-Compliant-success?style=for-the-badge&logo=w3c)
  ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
</div>

---

<div align="center">
  <img src="https://github.com/user-attachments/assets/0d367390-4142-4fa9-be62-8ad58e29a884" alt="Apollo v2.0 Preview" width="800">
</div>

--- 

## 📖 About The Project

**Apollo** is an interactive, real-time visualization of seven campus buildings at Santa Monica College: **Math & Science (MSB)**, **Drescher Hall**, **Humanities & Social Sciences (HSS)**, **Science (SCI)**, **Business (BUS)**, the **Student Success Center (SSC)**, and the **Art Complex (ART)** — all reachable from a new clickable **Campus Overview Map**.

Finding an empty room to study in or locating a specific SI (Supplemental Instruction) session can be frustrating. Apollo solves this by scraping the official schedule and visualizing it on a dynamic, 3-level interactive map.

### 🌟 Key Features

* **🗺️ Campus Overview Map:** A new top-level interactive campus map is now the default landing view — click any building to drop straight into its floor plans.
* **🔍 Global Search:** Instantly locate professors, specific classes (e.g., "Math 7"), or room numbers.
* **⭐ Starred Rooms:** Save specific classes or rooms to your schedule for quick access later, synced securely via browser local storage.
* **🏢 Multiple Buildings:** Seamlessly switch between seven campus buildings (MSB, Drescher, HSS, SCI, BUS, SSC, Art) using a unified dropdown selector that works on both desktop and mobile.
* **🌙 Persistent Dark Mode:** Full dark-theme support that persists across browser sessions.
* **🟢 Live Class Tracking:** Rooms turn **Red** when a class is currently in session.
* **🟡 Academic Support:** Rooms turn **Gold** for Supplemental Instruction sessions and **Professor Office Hours** (automatically overriding regular class closures so you know where to get help).
* **🔵 Study Rooms:** Dedicated study rooms are highlighted **Blue** with direct booking links.
* **♿ WCAG 2.2 AA Compliant:** Full support for screen readers, keyboard navigation, and high-contrast accessibility mode.
* **🏗️ Google Maps-style UI:** An immersive Overlay layout where controls float over the interactive map for maximum screen real estate.
* **🕰️ Time Machine:** Need to plan for later? Use the Time Machine debug panel to jump to any day or time in the future.

---

## ✨ What's New in v6.2.0

This release reframes Apollo around a campus-level entry point, adds the Art Complex, hardens the data pipeline, and introduces a new informational modal.

* **ℹ️ About Modal:** A new interactive "About Apollo" modal provides context on the app, how it works, and includes necessary privacy/disclaimer notices. Optimized for both desktop and mobile viewing with a dedicated floating icon seamlessly integrated into the Time Machine debug panel.
* **🗺️ Campus Overview Map:** A new [`CampusMap.jsx`](src/components/CampusMap.jsx) component renders a top-down SVG of the campus with clickable building footprints. It is now the default view on load — selecting a building drops you straight into floor 1 of that building's interior map.
* **🎨 Art Complex (ART) added:** Two new floor components — [`AFloor1.jsx`](src/components/AFloor1.jsx) and [`AFloor2.jsx`](src/components/AFloor2.jsx) — plus ~22 new rooms (classrooms, department offices, adjunct offices) wired into [`roomSchedule.js`](src/data/roomSchedule.js). Search auto-routes any `a-###` room ID to the right floor.

---

## ♿ Accessibility (WCAG 2.2 AA)

Apollo is built with a "Privacy and Inclusion First" mindset. As of **v7.2.0**, Apollo is fully compliant with **WCAG 2.2 AA** standards.

### Features
* **High Contrast Mode (♿):** A user-toggled mode that switches the map to a specialized, high-visibility palette (Teal/Orange/Deep Blue) and darkens hallways to ensure a 3:1 contrast ratio for non-text elements.
* **Full Keyboard Support:** Navigate the entire campus, switch buildings, and browse all 20 floors using only a keyboard. Includes focus-trap management for modals and "Skip to Content" links.
* **Screen Reader Optimized:** Semantic HTML5 landmarks, ARIA roles, and `aria-live` regions for real-time simulation updates and search results.
* **Non-Sensory Indicators:** Room status is communicated via redundant textual labels and initials (e.g., "C" for Class), ensuring usability for color-blind users.

Detailed compliance tracking can be found in [**ACCESSIBILITY.md**](ACCESSIBILITY.md).

---

## ⚙️ Architecture

Apollo runs on a hybrid architecture combining a React frontend with a Python-powered data pipeline.

### The Stack
* **Frontend:** React.js (bootstrapped with CRA)
* **Visualization:** Interactive SVGs with CSS transitions
* **Data Pipeline:** Python (`requests`, `BeautifulSoup`)
* **Deployment:** Vercel

### Data Flow
1.  **Harvesting:** Two local Python scripts (`smc_harvester.py` and `si_harvester.py`) scrape the official SMC Schedule of Classes (Oracle APEX) and the SI page of the SMC website.
2.  **Processing:** The scripts parse thousands of HTML rows, filtering for supported buildings (MSB, Drescher, HSS, SCI, BUS, SSC, Art) and normalizing time formats. Unrecognized locations are logged once each so missing normalizer rules are easy to spot.
3.  **Static Handling:** The data is compiled into optimized JSON files (`roomSchedule_LIVE.json` and `siSchedule.json`). Manually-entered data like `officeHours.json` is safely merged so the harvesters don't overwrite it. If a scrape returns zero rooms, the existing JSON is left untouched as a safety net.
4.  **Runtime Rendering:** The React frontend reads this static data, compares it against the user's system clock (or "Time Machine" state), and updates the SVG fill colors in real-time. The campus-level view is rendered by [`CampusMap.jsx`](src/components/CampusMap.jsx), which delegates into per-building floor components on click.

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
* Node.js & npm
* Python 3.x (for data updates)

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/obscuradesign/apollo.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Run the App**
    ```sh
    npm start
    ```
    The map will open at `http://localhost:3000`.

### Updating the Schedule Data
To fetch the latest class schedules:

1.  **Run the Class Harvester**
    ```sh
    python3 smc_harvester.py
    ```
2.  **Run the SI Harvester**
    ```sh
    python3 si_harvester.py
    ```
    *This will update the files in `src/data/`, which the React app consumes immediately.*

---

## 🗺️ Roadmap

- [x] **Saved Schedule:** Allow users to star rooms and classes to save them to their schedule.
- [x] **Multiple Buildings:** Support for additional campus buildings (Drescher Hall, HSS, Science, Business, SSC, Art).
- [x] **Basic Mobile Functionality** Currently, the SVG does not render on mobile. Fix this major bug to enable mobile viewing.
- [x] **Search:** Add a search bar to quickly locate professors or specific room numbers.
- [x] **Dark Mode:** Add a dark mode toggle to the app.
- [x] **Confirmation Popup:** Add a confirmation popup before being redirected to study room booking link.
- [x] **Campus Overview Map:** Click-through campus-level entry point that routes to building interiors.
- [x] **Art Complex schedule data:** Wired harvested events into Art rooms.
- [x] **WCAG 2.2 AA Compliance:** Achieved full AA compliance for the entire application (see `ACCESSIBILITY.md`).
- [ ] **CPC Building floors:** Three placeholder components ([`CPCFloor1.jsx`](src/components/CPCFloor1.jsx), [`CPCFloor2.jsx`](src/components/CPCFloor2.jsx), [`CPCFloor3.jsx`](src/components/CPCFloor3.jsx)) exist but need SVG content and room schedules.
- [ ] **Mobile Optimization:** Replace hover tooltips with a touch-friendly bottom sheet.
- [ ] **Data Automation:** Implement GitHub Actions to run the Python scrapers automatically every new session (4 times a year).


---

## 🛡️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Contact

**Kevin Davidson** Portfolio: [kevindavidson.work](https://kevindavidson.work)  
Project Link: [https://github.com/obscuradesign/apollo](https://github.com/obscuradesign/apollo)

<p align="center">
  <br>
  Built with ❤️ for the students of SMC.
</p>