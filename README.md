<div align="center">
  <br />
  <h1>Apollo</h1>
  <h3>The Santa Monica College Math & Science Building Map</h3>
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
  ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
</div>

---

## 📖 About The Project

**Apollo** is an interactive, real-time visualization of the Math & Science Building at Santa Monica College. 

Finding an empty room to study in or locating a specific SI (Supplemental Instruction) session can be frustrating. Apollo solves this by scraping the official schedule and visualizing it on a dynamic, 3-level interactive map.

### 🌟 Key Features

* **🔴 Live Class Tracking:** Rooms turn **Red** when a class is currently in session.
* **🟡 SI Integration:** Rooms turn **Gold** for Supplemental Instruction sessions (automatically overriding regular class data).
* **🔵 Study Rooms:** Dedicated study rooms are highlighted **Blue** with direct booking links.
* **🕰️ Time Machine:** Need to plan for later? Use the "Time Machine" debug panel to jump to any day or time in the future.
* **🏗️ Interactive SVGs:** Custom-designed, floor-by-floor vector maps for Levels 1, 2, and 3.

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
2.  **Processing:** The scripts parse thousands of HTML rows, filtering specifically for the "MS" (Math/Science) building and normalizing time formats.
3.  **Static Generation:** The data is compiled into optimized JSON files (`roomSchedule_LIVE.json` and `siSchedule.json`).
4.  **Runtime Rendering:** The React frontend reads this static data, compares it against the user's system clock (or "Time Machine" state), and updates the SVG fill colors in real-time.

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites
* Node.js & npm
* Python 3.x (for data updates)

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/obscuradesign/apollo.git](https://github.com/obscuradesign/apollo.git)
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

- [x] **Basic Mobile Functionality** Currently, the SVG does not render on mobile. Fix this major bug to enable mobile viewing.
- [ ] **Mobile Optimization:** Replace hover tooltips with a touch-friendly bottom sheet.
- [ ] **Data Automation:** Implement GitHub Actions to run the Python scrapers automatically every new session (4 times a year).
- [ ] **Search:** Add a search bar to quickly locate professors or specific room numbers.

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