import React, { useState } from "react";
import { PATH_GRAPHS } from "../data/pathGraphs.js";

/**
 * Inline navigation bar rendered above the map card.
 * Shows "Starting Room" and "Ending Room" dropdowns with Go/Reset buttons.
 * Supports building-wide cross-floor routing.
 */
export const NavigateBar = ({ building, currentFloor, activeSegments = new Set(), onNavigate, onReset }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const graph = PATH_GRAPHS[building];

  // Don't render if this building has no pathing data
  if (!graph) return null;

  const destinations = graph.destinations;

  // Group destinations by building and floor for `<optgroup>` separators
  const groups = {};
  for (const [id, label] of Object.entries(destinations)) {
    const parts = id.split(":");
    let groupLabel = "Other";
    if (parts.length > 1) {
      const bldFloor = parts[0]; // e.g. "CPC-2"
      const bldKey = bldFloor.split("-")[0]; // e.g. "CPC"
      const floorNum = bldFloor.split("-")[1] || "1"; // e.g. "2"
      // Use friendly names for well-known prefixes if desired, but bldKey works fine
      let prefix = bldKey;
      if (bldKey === "DRSCHR") prefix = "Drescher";
      if (bldKey === "A") prefix = "ART";
      
      groupLabel = `${prefix} Level ${floorNum}`;
    }
    (groups[groupLabel] ??= []).push({ id, label });
  }

  // Sort rooms alphabetically/numerically within each group (e.g. CPC 307 before CPC 308)
  for (const groupLabel of Object.keys(groups)) {
    groups[groupLabel].sort((a, b) =>
      a.label.localeCompare(b.label, undefined, { numeric: true, sensitivity: "base" })
    );
  }

  // Sort groups ascending: By building name first, then by floor number
  const sortedGroups = Object.entries(groups).sort((a, b) => {
    const [bldA, levelA] = a[0].split(" Level ");
    const [bldB, levelB] = b[0].split(" Level ");
    
    // Sort by building name
    const bldCompare = (bldA || "").localeCompare(bldB || "");
    if (bldCompare !== 0) return bldCompare;
    
    // If same building, sort by level
    const numA = parseInt(levelA, 10) || 0;
    const numB = parseInt(levelB, 10) || 0;
    return numA - numB;
  });

  const handleGo = () => {
    if (from && to && from !== to) {
      onNavigate(building, from, to);
    }
  };

  const handleReset = () => {
    setFrom("");
    setTo("");
    onReset();
  };

  // Check if a cross-floor route is active to show a helpful navigation tip
  let stairTip = null;
  if (activeSegments.size > 0) {
    if (activeSegments.has("CPC-stair-1-F12") || activeSegments.has("CPC-stair-1-F23")) {
      stairTip = "🚶 Route spans multiple floors! Take Exit 1 (Stairs) to navigate between floors.";
    } else if (activeSegments.has("CPC-stair-2-F12") || activeSegments.has("CPC-stair-2-F23")) {
      stairTip = "🚶 Route spans multiple floors! Take Exit 2 (Stairs) to navigate between floors.";
    } else if (activeSegments.has("ART-stair-1-F12")) {
      stairTip = "🚶 Route spans multiple floors! Take the Exit (Stairs) to navigate between floors.";
    } else if (activeSegments.has("DRSCHR-stair-left") || activeSegments.has("DRSCHR-stair-center") || activeSegments.has("DRSCHR-stair-right")) {
      stairTip = "🚶 Route spans multiple floors! Take the Exit (Stairs) to navigate between floors.";
    } else if (
      activeSegments.has("SCI-stair-left-F12") ||
      activeSegments.has("SCI-stair-left-F23") ||
      activeSegments.has("SCI-stair-center-F12") ||
      activeSegments.has("SCI-stair-center-F23") ||
      activeSegments.has("SCI-stair-1to2-F12") ||
      activeSegments.has("SCI-stair-2to3-F23")
    ) {
      stairTip = "🚶 Route spans multiple floors! Take the Exit (Stairs) to navigate between floors.";
    } else if (
      activeSegments.has("BUS-stair-left-F12") ||
      activeSegments.has("BUS-stair-center-F12") ||
      activeSegments.has("BUS-stair-right-F12")
    ) {
      stairTip = "🚶 Route spans multiple floors! Take the Exit (Stairs) to navigate between floors.";
    }
  }

  return (
    <div className="navigate-bar-container">
      <div className="navigate-bar" role="toolbar" aria-label="Room navigation">
        <label htmlFor="nav-from" className="nav-label">From</label>
        <select
          id="nav-from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          aria-label="Starting room"
        >
          <option value="">Starting Room...</option>
          {sortedGroups.map(([floorLabel, items]) => (
            <optgroup key={floorLabel} label={floorLabel}>
              {items.map(({ id, label }) => {
                const cleanLabel = label.replace(/\s*\(Floor \d+\)/, "");
                return (
                  <option key={id} value={id}>
                    {cleanLabel}
                  </option>
                );
              })}
            </optgroup>
          ))}
        </select>

        <label htmlFor="nav-to" className="nav-label">To</label>
        <select
          id="nav-to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          aria-label="Ending room"
        >
          <option value="">Ending Room...</option>
          {sortedGroups.map(([floorLabel, items]) => (
            <optgroup key={floorLabel} label={floorLabel}>
              {items.map(({ id, label }) => {
                const cleanLabel = label.replace(/\s*\(Floor \d+\)/, "");
                return (
                  <option key={id} value={id}>
                    {cleanLabel}
                  </option>
                );
              })}
            </optgroup>
          ))}
        </select>

        <button
          className="nav-go-btn"
          onClick={handleGo}
          disabled={!from || !to || from === to}
          aria-label="Find route"
        >
          Go
        </button>
        <button
          className="nav-reset-btn"
          onClick={handleReset}
          aria-label="Clear route"
        >
          Reset
        </button>
      </div>
      {stairTip && (
        <div className="nav-stair-tip" role="status">
          {stairTip}
        </div>
      )}
    </div>
  );
};
