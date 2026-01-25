import React, { useState, useEffect, useCallback } from "react";
import { Level1 } from "./Level1";
import { Level2 } from "./Level2";
import { Level3 } from "./Level3";
import { motion, AnimatePresence } from "framer-motion";
import ROOM_SCHEDULES from "../data/roomSchedule_LIVE.json";
import SI_SCHEDULES from "../data/siSchedule.json";
import "../App.css";
import { SearchModal } from "./SearchModal";

const COLORS = {
  LOCKED: "#9CA3AF",
  OCCUPIED: "#EF4444",
  SI_SESSION: "#EAB308",
  STUDY_ROOM: "#3B82F6",
  OFFLINE: "#3b3b3c"
};

// Manual offsets (x,y) to visually center each floor's unique SVG shape within the viewport
const FLOOR_OFFSETS = {
  1: { x: 0, y: 0 },
  2: { x: -20, y: 0 },
  3: { x: -30, y: 0 }
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getCurrentStatus = () => {
  const now = new Date();
  const day = DAYS[now.getDay()];
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return { day, time: `${hours}:${minutes}` };
};

const RoomTooltip = ({ info, position }) => {
  if (!info) return null;
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
      <h3 style={{ margin: "0 0 4px 0", fontSize: "1rem", color: "#111827" }}>{info.roomLabel}</h3>
      {info.activeEvent ? (
        <>
          <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: COLORS[info.activeEvent.status] }}>
            {info.activeEvent.title}
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
        <div style={{ fontSize: "0.8rem", color: "#9ca3af", fontStyle: "italic" }}>
          {info.isStudyRoom ? "Open for Study (Click to Book)" : "Currently Empty"}
        </div>
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
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.OCCUPIED }}></div><span>Class</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.SI_SESSION }}></div><span>SI Session</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.STUDY_ROOM }}></div><span>Study Room</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.LOCKED }}></div><span>Empty/Locked</span></div>
    <div className="legend-item"><div className="color-dot" style={{ backgroundColor: COLORS.OFFLINE }}></div><span>Staff/Office</span></div>
  </motion.div>
);


export function BuildingMap({ darkMode, setDarkMode }) {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [simulationState, setSimulationState] = useState(getCurrentStatus());
  const [isLive, setIsLive] = useState(true);

  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // NEW: Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightedRoom, setHighlightedRoom] = useState(null);

  // Navigation from Search
  const handleNavigate = (roomId) => {
    setIsSearchOpen(false);
    setHighlightedRoom(roomId);

    // Auto-switch floor logic
    const roomNum = roomId.replace("room-", "");
    if (roomNum.startsWith("1")) setCurrentFloor(1);
    if (roomNum.startsWith("2")) setCurrentFloor(2);
    if (roomNum.startsWith("3")) setCurrentFloor(3);

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
        roomLabel: status.roomData.label,
        activeEvent: status.activeEvent,
        isStudyRoom: status.roomData.type === "STUDY_ROOM"
      });
    }
  };

  const handleRoomClick = (roomId) => {
    if (["room-107b", "room-107c", "room-107d"].includes(roomId)) {
      // ADD 'noopener,noreferrer' as the third argument
      window.open(
        "https://smc.mywconline.com/schedule/calendar?scheduleid=sc6933704f3873d",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const getColorProp = useCallback((roomId) => {
    // 1. Search Highlight
    if (highlightedRoom) {
      return highlightedRoom === roomId ? "#22c55e" : "rgba(200, 200, 200, 0.1)";
    }

    // 2. Otherwise return standard status color
    const status = getRoomStatus(roomId);
    return status ? status.color : COLORS.OFFLINE;
  }, [getRoomStatus, highlightedRoom]);

  const activeTransform = {
    transform: `translate(${FLOOR_OFFSETS[currentFloor].x}px, ${FLOOR_OFFSETS[currentFloor].y}px)`
  };

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
            <SearchModal onClose={() => setIsSearchOpen(false)} onNavigate={handleNavigate} />
          )}
        </AnimatePresence>

        {/* TOP RIGHT: Spotlight Search Trigger (Inside Map Card) */}
        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 20 }}>
          <button
            onClick={() => setIsSearchOpen(true)}
            style={{
              padding: "8px 16px",
              borderRadius: "99px",
              border: "1px solid #e5e7eb", // Fixed light gray border
              background: "#ffffff", // Fixed white background
              color: "#374151", // Fixed dark gray text
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              cursor: "pointer",
              display: "flex", alignItems: "center", gap: "6px",
              transition: "all 0.2s",
              fontSize: "0.9rem"
            }}
          >
            🔍 Search
          </button>
        </div>

        {/* OVERLAY: Floor Switcher */}
        <div className="floor-switcher">
          {[1, 2, 3].map((floorNum) => (
            <motion.button
              key={floorNum}
              onClick={() => setCurrentFloor(floorNum)}
              className={`floor-btn ${currentFloor === floorNum ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Floor {floorNum}
            </motion.button>
          ))}
        </div>

        {/* MAP CONTENT */}
        <div style={{
          flex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          overflow: "hidden"
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFloor}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "30px",
                ...activeTransform
              }}
            >
              {currentFloor === 1 && <Level1 getColor={getColorProp} onHover={handleRoomHover} onClick={handleRoomClick} />}
              {currentFloor === 2 && <Level2 getColor={getColorProp} onHover={handleRoomHover} />}
              {currentFloor === 3 && <Level3 getColor={getColorProp} onHover={handleRoomHover} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* OVERLAY: Legend */}
        <Legend />
      </motion.div>

      <AnimatePresence>
        {hoveredRoom && <RoomTooltip info={hoveredRoom} position={mousePos} />}
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