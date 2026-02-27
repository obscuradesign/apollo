---
description: How to normalize a building floor SVG and set up room schedules/departments
---

# Normalize Floor SVG & Room Schedule

Use this workflow when adding a new floor SVG to the interactive map. The user will specify which floor file to normalize and provide department/room details.

## Prerequisites
- The raw SVG has already been converted into a React component (`.jsx` file) in `src/components/`
- Reference files:
  - **Color pattern**: `src/components/HSSLevel2.jsx` (canonical example of correct interactive room pattern)
  - **Department/schedule data**: `src/data/roomSchedule.js`
  - **Helper shorthand pattern**: `src/components/DrescherLevel3.jsx` (uses `const r = (id) => ({...})` helper)

## Step 1: Fix Color Mode (Convert `style="fill:..."` to React pattern)

Every room path that uses raw SVG inline styles like `style="fill:#00adee"` or `style="fill:#d0d2d3"` must be converted:

### Interactive rooms (offices, classrooms, dept hallways inside department groups)
Convert from:
```jsx
<path id="room-id" d="..." style="fill:#00adee" />
```
To:
```jsx
<path id="room-id" fill={getColor("room-id")} onMouseEnter={() => onHover("room-id", true)} onMouseLeave={() => onHover("room-id", false)} onClick={() => onClick("room-id")} style={{ cursor: "pointer", transition: "opacity 0.2s" }} d="..." />
```

### Non-department hallways (standalone hallways NOT inside a department group)
Convert from:
```jsx
<path id="hallway-1" d="..." style="fill:#d0d2d3" />
```
To:
```jsx
<path id="hallway-1" d="..." fill="#e5e5e5" />
```

### ALL rooms should be interactive
Even mechanical rooms and off-limits areas should use `fill={getColor("id")}` with hover/click handlers. If they're not in the room schedule, `getColor` will return a default grey automatically. This ensures consistent hover cursor behavior across all floors.

### Walls and bathroom signs
These stay as-is (no `style="fill:..."` to convert). Walls use no fill or `fill="#000000"`. Bathroom signs have no fill attributes.

## Step 2: Add Rooms to `roomSchedule.js`

Add entries to `src/data/roomSchedule.js` for every interactive room on the floor.

### Department rooms pattern
```js
// --- FLOOR N: [Department Name] ---
"dept-hallway-id": { type: "OFFICE", label: "[Department Name]", group: "GROUP_CONST", url: "https://..." },
"room-id": { type: "OFFICE", label: "[Department Name] Offices", group: "GROUP_CONST", url: "https://..." },
```

### Key rules
1. **Hallways inside department groups** get the department name as label (no "Offices" suffix)
2. **Office rooms** get `"[Department Name] Offices"` as label
3. **Conference rooms** keep descriptive labels like `"Department Conference Room"`
4. **Mechanical rooms and off-limits** are NOT added to the schedule — they stay grey via `getColor` default
5. **Group constants** use SCREAMING_SNAKE_CASE (e.g., `PHIL_SOC_SCI`, `HIST_ETH_STUDIES`)
6. **Every department room gets a `url`** pointing to the department page — user will update later
7. **Non-bookable floors** use `type: "OFFICE"` (no `events: []` array)
8. **Bookable rooms** (classrooms, study rooms) use `type: "CLASSROOM"` with `events: []` or `type: "STUDY_ROOM"`

### Information needed from user
Before starting, ask the user:
1. What departments are on this floor?
2. Which rooms belong to which department? (Look at `<g>` group IDs in the SVG)
3. Are any rooms bookable (classrooms/study rooms)?
4. What are the department URLs?
5. Any rooms that need special labels (meeting rooms, copy rooms, etc.)?

## Step 3: Verify

- Confirm no `style="fill:..."` strings remain in the JSX file
- Confirm all room IDs in the SVG have corresponding entries in `roomSchedule.js` (except mech rooms/off-limits which intentionally stay grey)
- Confirm the app compiles without errors (`npm start` should be running)
