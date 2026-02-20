import React, { useState, useEffect, useCallback } from "react";
import { Level1 } from "./Level1";
import { Level2 } from "./Level2";
import { Level3 } from "./Level3";
import { DrescherLevel1 } from "./DrescherLevel1";
import { DrescherLevel2 } from "./DrescherLevel2";
import { DrescherLevel3 } from "./DrescherLevel3";
import { motion, AnimatePresence } from "framer-motion";
import { ROOM_SCHEDULES as STATIC_SCHEDULES } from "../data/roomSchedule.js";
import LIVE_SCHEDULES from "../data/roomSchedule_LIVE.json";
import SI_SCHEDULES from "../data/siSchedule.json";
import "../App.css";
import { SearchModal } from "./SearchModal";

// Merge: LIVE data wins over static fallbacks (scraped events override stale static)
const ROOM_SCHEDULES = { ...STATIC_SCHEDULES, ...LIVE_SCHEDULES };

const COLORS = {
  LOCKED: "#9CA3AF",
  OCCUPIED: "#EF5350",
  SI_SESSION: "#FBBF24",
  STUDY_ROOM: "#FB923C",
  PROGRAM: "#60A5FA",
  OFFICE: "#60A5FA",
  OFFLINE: "#3b3b3c"
};

const BUILDINGS = {
  MSB: { label: "MSB", floors: 3 },
  DRSCHR: { label: "Drescher", floors: 3 }
};

// Manual offsets (x,y) to visually center each floor's SVG shape within the viewport
const FLOOR_OFFSETS = {
  MSB: {
    1: { x: 0, y: 0 },
    2: { x: -20, y: 0 },
    3: { x: -30, y: 0 }
  },
  DRSCHR: {
    1: { x: 0, y: 0 },
    2: { x: 0, y: 100, scale: 0.8 },
    3: { x: 0, y: 100, scale: 0.8 }
  }
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getCurrentStatus = () => {
  const now = new Date();
  const day = DAYS[now.getDay()];
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return { day, time: `${hours}:${minutes}` };
};

const RoomTooltip = ({ info, position, starredItems }) => {
  if (!info) return null;

  const isDepartment = info.roomType === "PROGRAM" || info.roomType === "OFFICE";
  const skipSuffix = /(department|program|offices|office|center|tutoring)/i.test(info.roomLabel);
  const displayLabel = isDepartment && !skipSuffix
    ? `${info.roomLabel} Department`
    : info.roomLabel;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "fixed",
        left: position.x + 15,
        top: position.y + 15,
        backgroundColor: "white",
        padding: "12px",
        borderRadius: "8px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        zIndex: 100,
        pointerEvents: "none",
        minWidth: "200px",
        border: "1px solid #e5e7eb"
      }}
    >
      <h3 style={{ margin: "0 0 4px 0", fontSize: "1rem", color: "#111827", display: "flex", alignItems: "center", gap: "6px" }}>
        {displayLabel}
        {starredItems?.some(s => s.id === info.roomId) && <span style={{ color: "#fbbf24" }}>★</span>}
      </h3>
      {info.activeEvent ? (
        <>
          <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: COLORS[info.activeEvent.status], display: "flex", alignItems: "center", gap: "6px" }}>
            {info.activeEvent.title}
            {starredItems?.some(s => s.id === `${info.roomId}-${info.activeEvent.day}-${info.activeEvent.start}-${info.activeEvent.courseName}`) &&
              <span style={{ color: "#fbbf24", fontSize: "1rem" }}>★</span>
            }
          </div>
          <div style={{ fontSize: "0.8rem", color: "#4b5563", marginTop: "4px" }}>
            {info.activeEvent.courseName}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
            👨‍🏫 {info.activeEvent.professor}
          </div>
          <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "4px" }}>
            🕒 {info.activeEvent.start} - {info.activeEvent.end}
          </div>
        </>
      ) : (
        isDepartment ? null : (
          <div style={{ fontSize: "0.8rem", color: "#9ca3af", fontStyle: "italic" }}>
            {info.isStudyRoom
              ? (info.clickable === false ? "Study Room (No Booking)" : (info.url ? "Click for Info" : "Open for Study (Click to Book)"))
              : "Currently Empty"}
          </div>
        )
      )}
    </motion.div>
  );
};

const Legend = () => (
  <motion.div
    className="legend-container"
    initial={{ opacity: 0, y: 20, x: "-50%" }}
    animate={{ opacity: 1, y: 0, x: "-50%" }}
    transition={{ delay: 0.5, duration: 0.5 }}
  >
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: "#a855f7" }}></div><span>Starred</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.OCCUPIED }}></div><span>Class</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.SI_SESSION }}></div><span>SI Session</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.STUDY_ROOM }}></div><span>Study Space</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.PROGRAM }}></div><span>Department</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.LOCKED }}></div><span>Empty/Locked</span></div>
  </motion.div>
);



export function BuildingMap({ darkMode, setDarkMode }) {
  const [currentBuilding, setCurrentBuilding] = useState("MSB");
  const [currentFloor, setCurrentFloor] = useState(1);
  const [simulationState, setSimulationState] = useState(getCurrentStatus());
  const [isLive, setIsLive] = useState(true);

  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // NEW: Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightedRoom, setHighlightedRoom] = useState(null);

  // NEW: Starred Items State (Persisted)
  const [starredItems, setStarredItems] = useState(() => {
    try {
      const saved = localStorage.getItem("apollo-starred-items");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse starred items", e);
      return [];
    }
  });

  const toggleStar = useCallback((item) => {
    setStarredItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      let newItems;
      if (exists) {
        newItems = prev.filter(i => i.id !== item.id);
      } else {
        newItems = [...prev, item];
      }
      localStorage.setItem("apollo-starred-items", JSON.stringify(newItems));
      return newItems;
    });
  }, []);

  // Navigation from Search
  const handleNavigate = (roomId) => {
    setIsSearchOpen(false);
    setHighlightedRoom(roomId);

    // Auto-switch building and floor based on room ID prefix
    if (roomId.startsWith("room-")) {
      setCurrentBuilding("MSB");
      const num = roomId.replace("room-", "");
      if (num.startsWith("1")) setCurrentFloor(1);
      else if (num.startsWith("2")) setCurrentFloor(2);
      else if (num.startsWith("3")) setCurrentFloor(3);
    } else if (roomId.startsWith("drschr-")) {
      setCurrentBuilding("DRSCHR");
      const num = roomId.replace("drschr-", "");
      if (num.startsWith("1")) setCurrentFloor(1);
      else if (num.startsWith("2")) setCurrentFloor(2);
      else if (num.startsWith("3")) setCurrentFloor(3);
    } else {
      // Other buildings: try to detect floor from first digit
      const match = roomId.match(/-(\d)/);
      if (match) setCurrentFloor(parseInt(match[1]));
    }

    // Auto-clear highlight after 3 seconds
    setTimeout(() => setHighlightedRoom(null), 3000);
  };

  // Live Mode: Syncs with system clock every 60s.
  // Simulation Mode: Pauses the interval and uses user-selected state.

  // Live Clock
  useEffect(() => {
    let interval;
    if (isLive) {
      setSimulationState(getCurrentStatus());
      interval = setInterval(() => {
        setSimulationState(getCurrentStatus());
      }, 60000);
    }
    return () => clearInterval(interval);
  }, [isLive]);

  // Mouse Tracking
  useEffect(() => {
    let frame;
    const handleMouseMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        frame = null;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    }
  }, []);

  // --- CONTROLS ---
  const handleDayChange = (e) => {
    setIsLive(false);
    setSimulationState(prev => ({ ...prev, day: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setIsLive(false);
    setSimulationState(prev => ({ ...prev, time: e.target.value }));
  };

  const returnToLive = () => {
    setIsLive(true);
    setSimulationState(getCurrentStatus());
  };

  const handleTimeKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault(); // Stop the native input behavior

      // Parse current time
      const [hours, minutes] = simulationState.time.split(":").map(Number);

      // Create a date object to handle the math (rollovers, etc.)
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);

      // Determine increment (ArrowUp = +1 min, ArrowDown = -1 min)
      // You can change '1' to '15' if you want 15-minute steps for easier scheduling
      const delta = e.key === "ArrowUp" ? 1 : -1;
      date.setMinutes(date.getMinutes() + delta);

      // Format back to HH:MM
      const newHours = String(date.getHours()).padStart(2, "0");
      const newMinutes = String(date.getMinutes()).padStart(2, "0");

      // Update state and ensure we enter simulation mode
      setIsLive(false);
      setSimulationState((prev) => ({ ...prev, time: `${newHours}:${newMinutes}` }));
    }
  };

  // Logic: SI Sessions take visual priority over regular classes.
  // Priority Check: SI_SESSION -> STUDY_ROOM -> OCCUPIED -> OFFLINE
  const getRoomStatus = useCallback((roomId) => {
    const siData = SI_SCHEDULES[roomId];
    if (siData && siData.events) {
      const activeSI = siData.events.find(event => {
        return event.day === simulationState.day &&
          simulationState.time >= event.start &&
          simulationState.time < event.end;
      });
      if (activeSI) {
        return { color: COLORS.SI_SESSION, activeEvent: activeSI, roomData: siData };
      }
    }

    let roomData = ROOM_SCHEDULES[roomId];

    if (["room-107b", "room-107c", "room-107d"].includes(roomId)) {
      if (!roomData) roomData = { label: "Study Room" };
      roomData = { ...roomData, type: "STUDY_ROOM" };
    }

    if (!roomData) return null;

    let activeEvent = null;
    let color = COLORS.LOCKED;

    if (roomData.type === "STUDY_ROOM") {
      color = COLORS.STUDY_ROOM;
    } else if (roomData.type === "PROGRAM") {
      color = COLORS.PROGRAM;
    } else if (roomData.type === "OFFICE") {
      color = COLORS.OFFICE;
    } else if (roomData.events) {
      activeEvent = roomData.events.find(event => {
        return event.day === simulationState.day &&
          simulationState.time >= event.start &&
          simulationState.time < event.end;
      });
      if (activeEvent) color = COLORS[activeEvent.status];
    } else {
      color = COLORS.OFFLINE;
    }

    return { color, activeEvent, roomData };
  }, [simulationState.day, simulationState.time]);

  const handleRoomHover = (roomId, isHovering) => {
    if (!isHovering) {
      setHoveredRoom(null);
      return;
    }
    const status = getRoomStatus(roomId);
    if (status && status.roomData) {
      setHoveredRoom({
        roomId,
        roomLabel: status.roomData.label,
        roomType: status.roomData.type,
        activeEvent: status.activeEvent,
        isStudyRoom: status.roomData.type === "STUDY_ROOM",
        clickable: status.roomData.clickable,
        url: status.roomData.url
      });
    }
  };

  const handleRoomClick = (roomId) => {
    const status = getRoomStatus(roomId);
    if (!status?.roomData) return;
    if (status.roomData.clickable === false) return;

    if (status.roomData.type === "STUDY_ROOM") {
      if (status.roomData.url) {
        // Custom URL logic (e.g. Modern Languages Lab)
        if (window.confirm(`Visit the ${status.roomData.label} website?`)) {
          window.open(status.roomData.url, "_blank", "noopener,noreferrer");
        }
      } else {
        // Default booking logic
        const confirmed = window.confirm(
          "This will open the SMC study room booking site in a new tab. Continue?"
        );
        if (confirmed) {
          window.open(
            "https://smc.mywconline.com/schedule/calendar?scheduleid=sc6933704f3873d",
            "_blank",
            "noopener,noreferrer"
          );
        }
      }
    } else if (status.roomData.type === "PROGRAM" || status.roomData.type === "OFFICE") {
      const confirmed = window.confirm(`Visit the ${status.roomData.label} website?`);
      if (confirmed) {
        // Use dynamic URL if available, otherwise fallback placeholder
        const targetUrl = status.roomData.url || "https://www.smc.edu/PLACEHOLDER_DEPARTMENT_LINK";
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  const getColorProp = useCallback((roomId) => {
    // 1. Search Highlight
    if (highlightedRoom) {
      return highlightedRoom === roomId ? "#22c55e" : "rgba(200, 200, 200, 0.1)";
    }

    // 2. Starred Item Active?
    const activeStarred = starredItems.find(item => {
      if (item.roomId !== roomId) return false;
      // Check for time match
      if (item.day && item.start && item.end) {
        return item.day === simulationState.day &&
          simulationState.time >= item.start &&
          simulationState.time < item.end;
      }
      return false;
    });

    if (activeStarred) return "#a855f7"; // Purple-500

    // 3. Otherwise return standard status color
    const status = getRoomStatus(roomId);
    return status ? status.color : COLORS.OFFLINE;
  }, [getRoomStatus, highlightedRoom, starredItems, simulationState]);

  const offsets = FLOOR_OFFSETS[currentBuilding]?.[currentFloor] || { x: 0, y: 0 };
  // Offsets are handled within motion.div animate props now, activeTransform removed.

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* --- NEW: Header with Inline Back Button --- */}
      <motion.div
        className="header-row"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a
          href="https://kevindavidson.work"
          className="back-btn"
          aria-label="Back to Portfolio"
        >
          {/* Simple SVG Left Arrow */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </a>
        <h3 className="page-title">To Main Site</h3>


      </motion.div>

      {/* Map Card */}
      <motion.div
        className="map-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <AnimatePresence>
          {isSearchOpen && (
            <SearchModal
              onClose={() => setIsSearchOpen(false)}
              onNavigate={handleNavigate}
              starredItems={starredItems}
              onToggleStar={toggleStar}
            />
          )}
        </AnimatePresence>

        {/* OVERLAY: Building + Floor Switcher */}
        <div className="floor-switcher">
          {/* Building Selector */}
          {Object.entries(BUILDINGS).map(([key, bldg]) => (
            <motion.button
              key={key}
              onClick={() => { setCurrentBuilding(key); setCurrentFloor(1); }}
              className={`floor-btn ${currentBuilding === key ? "building-active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {bldg.label}
            </motion.button>
          ))}

          <div style={{ width: "1px", height: "24px", background: "#e5e7eb", margin: "0 8px" }} />

          {/* Floor Selector */}
          {Array.from({ length: BUILDINGS[currentBuilding].floors }, (_, i) => i + 1).map((floorNum) => (
            <motion.button
              key={floorNum}
              onClick={() => setCurrentFloor(floorNum)}
              className={`floor-btn ${currentFloor === floorNum ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              F{floorNum}
            </motion.button>
          ))}

          {/* SEARCH BUTTON */}
          <div style={{ width: "1px", height: "24px", background: "#e5e7eb", margin: "0 8px" }} />
          <button
            onClick={() => setIsSearchOpen(true)}
            className="search-btn-inline"
          >
            🔍 Search
          </button>
        </div>

        {/* MAP CONTENT */}
        <div style={{
          flex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentBuilding}-${currentFloor}`}
              initial={{ opacity: 0, x: offsets.x + 20, y: offsets.y, scale: (offsets.scale || 1) * 0.95 }}
              animate={{ opacity: 1, x: offsets.x, y: offsets.y, scale: offsets.scale || 1 }}
              exit={{ opacity: 0, x: offsets.x - 20, y: offsets.y, scale: (offsets.scale || 1) * 0.95 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "30px"
              }}
            >
              {/* MSB Floors */}
              {currentBuilding === "MSB" && currentFloor === 1 && <Level1 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
              {currentBuilding === "MSB" && currentFloor === 2 && <Level2 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
              {currentBuilding === "MSB" && currentFloor === 3 && <Level3 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
              {/* Drescher Floors */}
              {currentBuilding === "DRSCHR" && currentFloor === 1 && <DrescherLevel1 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
              {currentBuilding === "DRSCHR" && currentFloor === 2 && <DrescherLevel2 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
              {currentBuilding === "DRSCHR" && currentFloor === 3 && <DrescherLevel3 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* OVERLAY: Legend */}
        <Legend />
      </motion.div>

      <AnimatePresence>
        {hoveredRoom && <RoomTooltip info={hoveredRoom} position={mousePos} starredItems={starredItems} />}
      </AnimatePresence>

      {/* DEBUG PANEL (Outside Map) */}
      <motion.div
        className="debug-panel"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >

        {/* Status Badge */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontSize: "0.75rem", padding: "4px 8px", borderRadius: "99px", fontWeight: "bold",
            backgroundColor: isLive ? "#dcfce7" : "#fee2e2",
            color: isLive ? "#166534" : "#991b1b"
          }}>
            {isLive ? "🔴 LIVE DATA" : "🕰️ TIME MACHINE"}
          </span>
          {!isLive && (
            <button onClick={returnToLive} style={{ fontSize: "0.75rem", padding: "4px 8px", cursor: "pointer" }}>
              Return to Live
            </button>
          )}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }}>
          <select
            value={simulationState.day}
            onChange={handleDayChange}
            style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          >
            {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          <input
            type="time"
            value={simulationState.time}
            onChange={handleTimeChange}
            onKeyDown={handleTimeKeyDown}
            style={{ padding: "7px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2rem",
              padding: "4px",
              marginLeft: "10px",
              transition: "transform 0.2s"
            }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}