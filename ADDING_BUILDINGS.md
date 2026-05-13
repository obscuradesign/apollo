# Adding a New Building to Apollo

This guide covers everything needed to add a new building's floor maps to Apollo in a way that is **fully WCAG 2.2 AA compliant** from day one. Follow it exactly and the new floors will match the accessibility standard of all existing buildings.

---

## Overview of the Floor Component Pattern

Each floor is a single React component that renders an SVG floor plan. The component receives three props from `BuildingMap.jsx`:

| Prop | Type | Purpose |
|------|------|---------|
| `getColor(id)` | `(string) => string` | Returns the current fill color for a room based on its schedule state |
| `onHover(id, bool, event?)` | `function` | Shows/hides the room tooltip |
| `onClick(id)` | `function` | Opens the room detail panel |

---

## Step 1 — Create the Floor Component File

Create one file per floor, e.g. `src/components/NEWLevel1.jsx`, `NEWLevel2.jsx`, etc.

### Required boilerplate (copy this exactly)

```jsx
import React from 'react';

export const NEWLevel1 = React.memo(function NEWLevel1({ getColor, onHover, onClick }) {

    // r() — interactive, navigable rooms (offices, classrooms, labs, lounges)
    const r = (id) => ({
        fill: getColor(id),
        role: "button",
        tabIndex: 0,
        "aria-label": id,
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onFocus: (e) => onHover(id, true, e),
        onBlur: () => onHover(id, false),
        onClick: () => onClick(id),
        onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(id); } },
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    // d() — non-navigable service areas (mechanical rooms, custodial closets, electrical rooms)
    // Mouse hover/click still works for sighted users, but excluded from tab order & screen readers.
    const d = (id) => ({
        fill: getColor(id),
        onMouseEnter: () => onHover(id, true),
        onMouseLeave: () => onHover(id, false),
        onClick: () => onClick(id),
        style: { cursor: "pointer", transition: "opacity 0.2s" }
    });

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Floor_1"
            data-name="Floor 1"
            viewBox="..."
            role="img"
            aria-label="[Building Full Name] Floor 1 map"
        >
            {/* floor content here */}
        </svg>
    );
});
```

> **Never omit** `role="img"` and `aria-label` from the `<svg>` tag. These are the SVG's landmark — screen readers announce it when focus enters the map.

---

## Step 2 — Classify Every SVG Element

Go through every element in the SVG and assign it to one of four categories:

### A — Interactive rooms → use `{...r("room-id")}`

Rooms that appear in the schedule system and that users navigate to. Examples: classrooms, offices, labs, conference rooms, student lounges, study rooms.

```jsx
<path id="new-101" d="M..." {...r("new-101")} />
```

The room ID must exactly match the key used in your schedule data JSON.

### B — Non-navigable service areas → use `{...d("room-id")}`

Rooms with no schedule data that staff/facilities use. Examples: mechanical rooms, electrical rooms, custodial closets, server rooms, janitor closets.

```jsx
<path id="mech-room" d="M..." {...d("mech-room")} />
```

> **Rule of thumb:** If a student would never navigate to it as a destination, use `d()`.

### C — Purely decorative static fills → leave as plain `<path>`

Service rooms that have a hardcoded dark fill color (e.g. `style={{ fill: "#3b3b3c" }}` or `style={{ fill: "#58595b" }}`) and no hover behavior at all. These should simply remain as static paths with no event handlers. They are invisible to assistive technology because they have no interactive role.

```jsx
<path id="electrical-shaft" style={{ fill: "#3b3b3c" }} d="M..." />
```

### D — Decorative groups → add `aria-hidden="true"`

Groups that contain only structural/decorative SVG geometry. Screen readers must not read these. Add `aria-hidden="true"` to the `<g>` opening tag:

| Group type | Example id | Action |
|------------|-----------|--------|
| Walls / structural lines | `id="walls"` | `aria-hidden="true"` |
| Hallway fills | `id="hallways"`, `id="Hallways"` | `aria-hidden="true"` |
| Bathroom signs / icons | `id="Bathroom-Sign-1"` | `aria-hidden="true"` |
| Furniture / tables | `id="tables"` | `aria-hidden="true"` |
| Stair indicators | `id="stair"` | `aria-hidden="true"` |
| Service walls | `id="service-walls"` | `aria-hidden="true"` |

```jsx
<g id="walls" fill="#000000" aria-hidden="true">
    ...wall paths...
</g>

<g id="Hallways" fill="#e5e5e5" aria-hidden="true">
    ...hallway paths...
</g>

<g id="Bathroom-Sign-1" fill="#000000" aria-hidden="true">
    ...icon paths...
</g>
```

Standalone decorative hallway `<path>` elements (not in a `<g>`) should get `aria-hidden="true"` directly:

```jsx
<path id="hallway-2" d="M..." fill="#e5e5e5" aria-hidden="true" />
```

---

## Step 3 — Register the Component in `BuildingMap.jsx`

Open `src/components/BuildingMap.jsx` and follow the existing pattern for any building:

1. **Import the components:**
   ```js
   import { NEWLevel1 } from './NEWLevel1';
   import { NEWLevel2 } from './NEWLevel2';
   ```

2. **Add the building to the building list** (the `buildings` array or equivalent config object) with its display name, abbreviation, and floor count.

3. **Add the floor component mapping** in the floor-renderer switch/map so `NEWLevel1` renders when the user selects building `"NEW"`, floor `1`.

4. **Add room data** to the appropriate schedule JSON files so `getColor()` returns meaningful colors for your new room IDs.

---

## Step 4 — Checklist Before Committing

Run through this for **every floor component** before merging:

- [ ] `<svg>` has `role="img"` and `aria-label="[Building] Floor [N] map"`
- [ ] Every classroom/office/lab uses `{...r("id")}` — verify `role="button"` spreads onto the path
- [ ] Every mechanical/service room uses `{...d("id")}` — verify it has **no** `tabIndex` or `role`
- [ ] Pure decorative static fills have no event handlers
- [ ] All `<g id="walls">` groups have `aria-hidden="true"`
- [ ] All `<g id="hallways">` / `<g id="Hallways">` groups have `aria-hidden="true"`
- [ ] All `<g id="Bathroom-Sign-*">` groups have `aria-hidden="true"`
- [ ] All `<g id="tables">` groups (if present) have `aria-hidden="true"`
- [ ] Standalone decorative hallway `<path>` elements have `aria-hidden="true"`
- [ ] Room IDs in the component match keys in the schedule data exactly
- [ ] Tab through the floor in a browser and confirm focus skips walls, hallways, and service rooms

---

## Quick Reference: Helper Comparison

| Helper | `role` | `tabIndex` | `aria-label` | `onFocus`/`onBlur` | `onKeyDown` | Use for |
|--------|--------|-----------|--------------|-------------------|-------------|---------|
| `r(id)` | `"button"` | `0` | ✅ | ✅ | ✅ | Navigable rooms |
| `d(id)` | — | — | — | — | — | Service/mech rooms |
| *(none)* | — | — | — | — | — | Static decorative fills |

---

## Why This Matters

| WCAG Criterion | What these patterns satisfy |
|----------------|-----------------------------|
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | `role="img"` + `aria-label` on SVG; `aria-label` on every room path |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | Decorative elements hidden from AT with `aria-hidden` |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | `tabIndex` + `onKeyDown` (Enter/Space) on all navigable rooms |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | Service rooms excluded from tab sequence via `d()` |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | Tooltip triggered by `onFocus` as well as `onMouseEnter` |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | `role="button"` + `aria-label` on every interactive path |
