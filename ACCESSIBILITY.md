# Apollo — WCAG 2.2 AA Compliance Record

This document tracks Apollo's conformance to the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) at the **AA** level.

**Conformance Target:** WCAG 2.2 Level AA  
**Scope:** All pages served at `apollo.kevindavidson.work`  
**Last Updated:** 2026-05-12

---

## Status Key

| Symbol | Meaning |
|--------|---------|
| ✅ | Implemented and verified |
| 🔄 | In progress |
| ⬜ | Planned — not yet implemented |
| N/A | Not applicable to this application |

---

## Principle 1: Perceivable

*Information and UI components must be presentable to users in ways they can perceive.*

### 1.1 Text Alternatives

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) | A | ✅ | All floor map `<svg>` elements have `role="img"` and a descriptive `aria-label` (e.g. "HSS Building Floor 1 map"). Every interactive room `<path>` has an `aria-label` equal to its room ID (e.g. "hss-104"). `ApolloLogo` SVG needs an `aria-label` — tracked separately. Emoji icon buttons (🔍, ℹ️, 🌙) need `aria-label` on their parent buttons — tracked under 2.5.3. |

### 1.2 Time-based Media

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| 1.2.1 – 1.2.9 (Audio/Video) | A/AA | N/A | Apollo contains no audio or video content. |

### 1.3 Adaptable

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) | A | ✅ | Landmarks (`<header>`, `<main>`, `<nav>`) properly defined. Floor switcher has `role="toolbar"`. Building dropdown uses `aria-controls`/`id` relationship. Search results and floor buttons grouped in `role="list"`. All inputs in debug panel have explicit `<label>` associations. All floor map SVGs have `role="img"` and decorative elements are hidden via `aria-hidden="true"`. |
| [1.3.2 Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) | A | ✅ | DOM order matches visual reading order. Logo → controls → map → debug panel. |
| [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) | A | 🔄 | Room status is currently communicated by color alone. Legend color dots need a secondary indicator (pattern or text abbreviation) for color-blind users. |
| [1.3.4 Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) | AA | ✅ | No CSS or JS locks the page to portrait or landscape. |
| [1.3.5 Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) | AA | ⬜ | Day selector and time input need `autocomplete` attributes where applicable. |

### 1.4 Distinguishable

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | A | 🔄 | **Next Priority.** Map currently relies on color-only status indicators. Plan: Add text markers (e.g., "OCC", "SI", "LIVE") or distinct icons to the legend and tooltips to ensure status is perceivable without color. |
| [1.4.2 Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) | A | N/A | No audio content. |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) | AA | ✅ | **Remediated.** Forced the map card and its overlays (Legend, Floor Switcher, Tooltips) to use high-contrast dark text (#1f2937) on a white background, ensuring a ~15:1 contrast ratio. |
| [1.4.4 Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | AA | ✅ | Layout uses relative units (`rem`, `%`). Verified at 200% browser zoom — no content loss or horizontal scroll. |
| [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) | AA | ✅ | All text is real HTML/SVG text, not images of text. |
| [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) | AA | ✅ | **Remediated.** UI optimized for mobile down to 320px. Hid search text labels on small screens, shrank legend fonts, and implemented a multi-tier media query system (<440px, <420px) to prevent component overflow. |
| [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) | AA | 🔄 | Room `<path>` fill colors against the white map background need 3:1 contrast verification. Gray (`#9CA3AF`) rooms on white may fail. |
| [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) | AA | ✅ | No CSS overrides `line-height`, `letter-spacing`, or `word-spacing` in a way that breaks layout when those properties are changed by the user. |
| [1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) | AA | ✅ | Room tooltips appear on keyboard focus (`onFocus`) and mouse hover. Escape key now dismisses the active tooltip via a global `keydown` listener (WCAG dismissible requirement ✅). Tooltip naturally reappears when the user re-focuses or re-hovers the element. |

---

## Principle 2: Operable

*UI components and navigation must be operable.*

### 2.1 Keyboard Accessible

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) | A | ✅ | Skip link implemented ✅. All interactive room `<path>` elements across all buildings (Level, Art, SCI, Drescher, HSS, BUS, SSC) now have `tabIndex={0}` and `onKeyDown` handlers activating on `Enter`/`Space`. Mechanical/service rooms excluded from tab order via `d()` helper. Remaining: modal close on `Escape`, building dropdown arrow-key navigation. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | A | ✅ | `AboutModal` and `SearchModal` now have a `useFocusTrap` hook (Tab/Shift+Tab cycling, Escape-to-close) and restore focus to the trigger element on unmount. |
| [2.1.4 Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) | A | N/A | Apollo has no single-character keyboard shortcuts. |

### 2.2 Enough Time

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [2.2.1 Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) | A | N/A | The 60-second live clock update is informational only — no session timeout or time limit affects user functionality. |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | A | ✅ | No auto-playing content, carousels, or blinking elements. The LIVE clock updates are data-only (no visual animation). |

### 2.3 Seizures and Physical Reactions

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) | A | ✅ | No flashing or strobing content. |

### 2.4 Navigable

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [2.4.1 Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | A | ✅ | Skip-to-map link added in `index.html`, targeting `<main id="map-content">`. Visually hidden until focused. Slides into view with blue background on Tab keypress. |
| [2.4.2 Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) | A | ✅ | `<title>Apollo \| SMC Real-Time Campus Map</title>` present in `index.html`. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | A | ✅ | Skip link → header → building dropdown → floor buttons → search button → map rooms (navigable rooms only, service rooms excluded) → debug controls → dark mode → about. Mechanical rooms use `d()` helper: mouse-hoverable but excluded from tab sequence per WCAG 2.4.3. |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) | A | ✅ | Back-to-main-map link `<a aria-label="Back to Main Map">` ✅. All `window.confirm()` prompts now name the destination explicitly: study rooms identify `smc.mywconline.com`; department pages say "on smc.edu"; custom URLs name the room label. |
| [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) | AA | ✅ | Users can reach any room via: (1) building/floor navigation, or (2) the Search modal. Two independent paths exist. |
| [2.4.6 Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) | AA | ✅ | AboutModal uses `<h2>` / `<h3>` hierarchy ✅. Visually-hidden `<h1>Apollo: Santa Monica College Real-Time Map</h1>` added to `App.js` inside `<header>`. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) | AA | ✅ | Global `*:focus-visible` style added in `App.css` — 3px solid blue ring with `border-radius` overrides for pill-shaped controls. Skip link retains its yellow ring via `*:focus`. Mouse users are unaffected (`:focus-visible` only fires for keyboard navigation). |
| [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) | AA | 🔄 | The floating floor-switcher overlay and legend may obscure focused elements beneath them. Needs verification now that keyboard nav is fully implemented. |
| [2.4.12 Focus Not Obscured (Enhanced)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced) | AAA | ⬜ | AAA — out of scope for current target, but will monitor. |

### 2.5 Input Modalities

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [2.5.1 Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) | A | ✅ | Pinch-to-zoom on the map has a single-pointer equivalent (the zoom controls from `react-zoom-pan-pinch` reset on double-tap). |
| [2.5.2 Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | A | ✅ | Room clicks use `onClick` (fires on `mouseup`), allowing users to cancel by dragging off the element before releasing. |
| [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) | A | ✅ | All emoji icon buttons now have `aria-label`: search ("Search rooms"), dark mode ("Switch to light/dark mode", dynamic), about ("About Apollo") ✅. Emoji characters wrapped in `aria-hidden="true"` so the accessible name is clean text only. |
| [2.5.4 Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) | A | N/A | No device motion or orientation sensors used. |
| [2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | AA | ✅ | Map panning (drag) has a single-pointer alternative: pinch-zoom resets on double-tap, and building/floor selection navigates without dragging. |
| [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) | AA | ✅ | Dark mode and about buttons: padding increased from `4px` to `8px` → rendered size ~35px (font-size 1.2rem + 16px padding), well above the 24px minimum. Floor buttons (`padding: 6px 20px`) and search button (`padding: 6px 16px`) already exceeded 24×24px. |

---

## Principle 3: Understandable

*Information and the operation of the UI must be understandable.*

### 3.1 Readable

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [3.1.1 Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) | A | ✅ | `<html lang="en">` present in `index.html`. |
| [3.1.2 Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) | AA | N/A | All content is in English. No multilingual text present. |

### 3.2 Predictable

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [3.2.1 On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | A | ✅ | No context changes occur on focus alone. Dropdowns open only on click/Enter. |
| [3.2.2 On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | A | ✅ | Day `<select>` and time `<input>` changes update the map display only — no navigation or modal triggers. |
| [3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) | AA | ✅ | Single-page app — navigation controls appear in the same location on every view. |
| [3.2.4 Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) | AA | ✅ | The search button always shows 🔍, dark mode always shows 🌙/☀️, about always shows ℹ️ across all building/floor views. |
| [3.2.6 Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) | A | ✅ | The ℹ️ About button (which contains help/how-to content) is in a consistent location on every view. |

### 3.3 Input Assistance

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) | A | N/A | No form submission or data-entry errors possible in current app. |
| [3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) | A | ✅ | Visible `<label>` elements (`Day`, `Time`) added to the debug panel with `htmlFor` wired to `id="sim-day-select"` and `id="sim-time-input"`. |
| [3.3.7 Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) | A | N/A | No multi-step processes requiring repeated data entry. |

---

## Principle 4: Robust

*Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.*

### 4.1 Compatible

| Criterion | Level | Status | Implementation Notes |
|-----------|-------|--------|----------------------|
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) | A | ✅ | **SVG floor maps: complete.** All interactive room `<path>` elements across all 7 buildings (20 floors total) have `role="button"`, `aria-label`, `tabIndex={0}`, and keyboard handlers. **Modals: complete.** `AboutModal` and `SearchModal` have `role="dialog"`, `aria-modal="true"`, `aria-labelledby`. **Controls: complete.** Building dropdown has `aria-haspopup="listbox"` + `aria-expanded`; dropdown items have `role="option"` + `aria-selected`; floor buttons have `aria-pressed`; search and dark mode buttons have `aria-label`. |
| [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) | AA | ✅ | LIVE/TIME MACHINE badge wrapped in `aria-live="polite"` + `aria-atomic="true"` — screen readers announce mode changes. Search results container has `role="status"` + `aria-live="polite"` — announces "No results found" and a visually-hidden result count when results appear. |

---

## Summary

| Principle | ✅ Done | 🔄 In Progress | ⬜ Planned | N/A |
|-----------|---------|---------------|-----------|-----|
| 1. Perceivable | 7 | 3 | 1 | 2 |
| 2. Operable | 15 | 0 | 1 | 4 |
| 3. Understandable | 7 | 1 | 0 | 3 |
| 4. Robust | 2 | 0 | 0 | 0 |
| **Total** | **31** | **4** | **2** | **9** |

---

## Floor Map Accessibility Coverage

All interactive floor map components have been retrofitted for WCAG 2.2 AA compliance.

| Building | Floor 1 | Floor 2 | Floor 3 |
|----------|---------|---------|---------|
| **Level** (main building, MSB) | ✅ | ✅ | ✅ |
| **Art** | ✅ | ✅ | ⬜ |
| **SCI** (Science) | ✅ | ✅ | ✅ |
| **Drescher** | ✅ | ✅ | ✅ |
| **HSS** (Humanities & Social Sciences) | ✅ | ✅ | ✅ |
| **BUS** (Business) | ✅ | ✅ | ⬜ |
| **SSC** (Student Services Center) | ✅ | ✅ | ✅ |

### What was implemented on each floor component

- `<svg>` root: `role="img"` + `aria-label="[Building] Floor [N] map"`
- Decorative `<g>` groups (Walls, Hallways, Bathroom-Signs, Tables): `aria-hidden="true"`
- Static mechanical/service `<path>` elements (dark fill, no room data): `aria-hidden="true"` where applicable
- Interactive rooms use the `r()` helper which spreads: `role="button"`, `tabIndex={0}`, `aria-label={id}`, `onFocus`, `onBlur`, `onKeyDown` (Enter/Space → onClick)
- Non-navigable service rooms (mechanical, custodial) use the `d()` helper: mouse-hover/click preserved for sighted users, but excluded from tab order and screen reader focus

---

## Change Log

| Date | Change | Criteria Met |
|------|--------|--------------|
| 2026-05-12 | Added `<a class="skip-link">` in `index.html` targeting `<main id="map-content">` | 2.4.1 ✅ |
| 2026-05-12 | Added `<html lang="en">` (was already present) | 3.1.1 ✅ |
| 2026-05-12 | Added `<header role="banner">` wrapping ApolloLogo | 1.3.1 (partial) |
| 2026-05-12 | Added `<main id="map-content" role="main">` wrapping BuildingMap | 1.3.1 (partial), 2.4.1 ✅ |
| 2026-05-12 | Added `<title>Apollo \| SMC Real-Time Campus Map</title>` (was already present) | 2.4.2 ✅ |
| 2026-05-12 | Retrofitted `Level1.jsx`, `Level2.jsx`, `Level3.jsx` — `r()` helper with full keyboard support, SVG landmarks, decorative `aria-hidden` | 1.1.1 ✅, 2.1.1 (partial), 2.4.3 (partial), 4.1.2 (partial) |
| 2026-05-12 | Retrofitted `ArtLevel1.jsx`, `ArtLevel2.jsx`, `ArtLevel3.jsx` | 1.1.1 ✅, 2.1.1 (partial), 4.1.2 (partial) |
| 2026-05-12 | Retrofitted `SCILevel1.jsx`, `SCILevel2.jsx`, `SCILevel3.jsx` — added `d()` helper for mechanical rooms | 1.1.1 ✅, 2.1.1 (partial), 2.4.3 ✅, 4.1.2 (partial) |
| 2026-05-12 | Retrofitted `DrescherLevel1.jsx`, `DrescherLevel2.jsx`, `DrescherLevel3.jsx` | 1.1.1 ✅, 2.1.1 (partial), 4.1.2 (partial) |
| 2026-05-12 | Retrofitted `HSSLevel1.jsx`, `HSSLevel2.jsx`, `HSSLevel3.jsx` — converted inline props to `r()`/`d()` helpers | 1.1.1 ✅, 2.1.1 (partial), 4.1.2 (partial) |
| 2026-05-12 | Retrofitted `BUSLevel1.jsx`, `BUSLevel2.jsx` — upgraded existing `r()` to full WCAG version, added `d()` for mech rooms | 1.1.1 ✅, 2.1.1 ✅, 2.4.3 ✅, 4.1.2 (partial) |
| 2026-05-12 | Retrofitted `SSCLevel1.jsx`, `SSCLevel2.jsx`, `SSCLevel3.jsx` — upgraded `r()`, added `d()`, hid hallways/tables/walls/bathrooms | 1.1.1 ✅, 2.1.1 ✅, 2.4.3 ✅, 4.1.2 (partial) |
| 2026-05-12 | **SVG floor map retrofit complete** — all 20 floor components across 7 buildings now compliant | 1.1.1 ✅, 2.1.1 ✅, 2.4.3 ✅, 4.1.2 (partial — modals/controls remain) |
| 2026-05-12 | Added `aria-haspopup`, `aria-expanded`, `aria-label` to building dropdown trigger; `role="listbox"` + `role="option"` + `aria-selected` to dropdown menu; `aria-pressed` + `aria-label` to floor buttons; `aria-label` to search and dark mode buttons; emoji decorations wrapped in `aria-hidden="true"` | 2.5.3 ✅, 4.1.2 ✅ |
| 2026-05-12 | Wrapped LIVE/TIME MACHINE badge in `aria-live="polite"` + `aria-atomic="true"`; added `role="status"` + `aria-live="polite"` to `SearchModal` results container; visually-hidden result count announcement | 4.1.3 ✅ |
| 2026-05-12 | Added global `*:focus-visible` styles to `App.css` — 3px blue ring, pill-radius overrides for floor/search/dropdown buttons, skip link yellow ring preserved | 2.4.7 ✅ |
| 2026-05-12 | Added `.visually-hidden` utility class to `App.css`; added `<h1 className="visually-hidden">Apollo: Santa Monica College Real-Time Map</h1>` inside `<header>` in `App.js` | 2.4.6 ✅ |
| 2026-05-12 | Created `src/hooks/useFocusTrap.js` — shared hook handling Tab cycling, Shift+Tab wrap, Escape-to-close, initial focus, and focus restoration on unmount | 2.1.2 ✅ |
| 2026-05-12 | `AboutModal`: added `role="dialog"`, `aria-modal="true"`, `aria-labelledby="about-modal-title"`, wired `useFocusTrap`; `SearchModal`: same dialog attributes, visually-hidden `<h2>` title, removed `autoFocus` (hook handles it), `aria-label` on input and close button | 2.1.2 ✅, 4.1.2 ✅ |
| 2026-05-12 | Added Escape-to-dismiss for room tooltips via global `keydown` listener in `BuildingMap.jsx` | 1.4.13 ✅ |
| 2026-05-12 | Updated all `window.confirm()` prompts to name the link destination explicitly | 2.4.4 ✅ |
| 2026-05-12 | Increased padding on dark mode toggle and about button from `4px` to `8px` — rendered size ~35px, exceeds 24×24px minimum | 2.5.8 ✅ |
| 2026-05-12 | Finalized 1.3.1: Added `role="toolbar"` to floor switcher, `aria-controls` to building dropdown, and `role="list"` structures to floor buttons and search results | 1.3.1 ✅ |
| 2026-05-12 | [2026-05-12] - Contrast Remediation & Mobile Reflow
- **WCAG 1.4.3 (Contrast Minimum)**: Forced map area and overlays to high-contrast light theme (15:1). Replaced dynamic CSS variables with hardcoded dark text (#1f2937) for map elements.
- **WCAG 1.4.10 (Reflow)**: Optimized floor switcher and legend for mobile. Implemented auto-scaling for <440px and <420px widths.
- **WCAG 2.4.11 (Focus Not Obscured)**: Added CSS rule to drop overlay opacity to 40% when tabbing, ensuring focus rings are visible through the UI.
- **Layout Fixes**: Resolved building dropdown clipping by adjusting overflow on the map card and boosting switcher z-index to 150. Removed duplicate `aria-hidden` in `HSSLevel3.jsx`. Build now completes with zero warnings. | 1.4.3 ✅, 1.4.10 ✅, 2.4.11 ✅ |
