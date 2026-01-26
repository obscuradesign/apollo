import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ROOM_SCHEDULES from "../data/roomSchedule_LIVE.json";
import SI_SCHEDULES from "../data/siSchedule.json";

export const SearchModal = ({ onClose, onNavigate }) => {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [results, setResults] = useState([]);

    // Debounce the query input (150ms)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 150);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
            return;
        }
        const lowerQ = debouncedQuery.toLowerCase();
        const hits = [];

        // 1. Search SI
        Object.entries(SI_SCHEDULES).forEach(([roomId, data]) => {
            if (data.label?.toLowerCase().includes(lowerQ)) {
                hits.push({ roomId, label: data.label, type: "SI Session", detail: "SI Session Room" });
            }
            if (data.events) {
                data.events.forEach(ev => {
                    if (
                        ev.title?.toLowerCase().includes(lowerQ) ||
                        ev.courseName?.toLowerCase().includes(lowerQ) ||
                        ev.professor?.toLowerCase().includes(lowerQ)
                    ) {
                        hits.push({
                            roomId,
                            label: data.label,
                            type: "SI Session",
                            detail: `${ev.title}: ${ev.courseName}`
                        });
                    }
                });
            }
        });

        // 2. Search Classes
        Object.entries(ROOM_SCHEDULES).forEach(([roomId, data]) => {
            // Label match
            if (data.label?.toLowerCase().includes(lowerQ)) {
                hits.push({ roomId, label: data.label, type: "Room", detail: data.type || "Classroom" });
            }
            // Event match
            if (data.events) {
                data.events.forEach(ev => {
                    if (
                        ev.title?.toLowerCase().includes(lowerQ) ||
                        ev.courseName?.toLowerCase().includes(lowerQ) ||
                        ev.professor?.toLowerCase().includes(lowerQ)
                    ) {
                        hits.push({
                            roomId,
                            label: data.label,
                            type: "Class",
                            // Enhanced Detail: Title: Course (Day Start-End) • Professor
                            detail: `${ev.title}: ${ev.courseName} (${ev.day} ${ev.start} - ${ev.end}) • ${ev.professor}`,
                            // Sort Helpers
                            sortDay: ev.day,
                            sortTime: ev.start
                        });
                    }
                });
            }
        });

        // SORTING LOGIC
        const DAY_ORDER = { "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6, "Sun": 7 };

        hits.sort((a, b) => {
            // 1. Sort by Type (SI/Room/Class) - optional, keeps things grouped
            // if (a.type !== b.type) return a.type === "Room" ? -1 : 1;

            // 2. Sort by Day
            const dayA = DAY_ORDER[a.sortDay] || 99; // 99 for non-events (Rooms)
            const dayB = DAY_ORDER[b.sortDay] || 99;
            if (dayA !== dayB) return dayA - dayB;

            // 3. Sort by Time
            if (a.sortTime && b.sortTime) {
                return a.sortTime.localeCompare(b.sortTime);
            }
            return 0;
        });

        setResults(hits.slice(0, 20)); // Limit results
    }, [debouncedQuery]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
                display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "100px"
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ y: -20, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: -20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "90%", maxWidth: "500px",
                    background: "var(--bg-header, #1f2937)",
                    borderRadius: "16px",
                    padding: "16px",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    border: "1px solid var(--border-color, #374151)",
                    color: "var(--text-primary, white)"
                }}
            >
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "1.2rem" }}>🔍</span>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search classes, rooms, professors..."
                        value={query}
                        onChange={e => setQuery(e.target.value.slice(0, 100))}
                        style={{
                            flex: 1, padding: "10px", fontSize: "1rem",
                            borderRadius: "8px", border: "1px solid #4b5563",
                            background: "var(--bg-app, #111827)",
                            color: "var(--text-primary, white)",
                            outline: "none"
                        }}
                    />
                    <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", color: "var(--text-secondary, #9ca3af)" }}>✕</button>
                </div>

                <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
                    {results.length === 0 && query && <div style={{ padding: "10px", color: "var(--text-secondary, #9ca3af)" }}>No results found.</div>}
                    {results.map((r, i) => (
                        <div
                            key={i}
                            onClick={() => onNavigate(r.roomId)}
                            style={{
                                padding: "12px",
                                borderBottom: "1px solid var(--border-color, #374151)",
                                cursor: "pointer", display: "flex", flexDirection: "column", gap: "2px"
                            }}
                            className="search-result-item"
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                            <div style={{ fontWeight: "bold", color: "var(--text-primary, white)", display: "flex", justifyContent: "space-between" }}>
                                {r.label}
                                <span style={{
                                    fontSize: "0.75em", opacity: 0.9,
                                    background: r.type === "SI Session" ? "#F59E0B" : "#4B5563", // Amber for SI, Gray-600 for Class
                                    color: "white", // Ensure white text for contrast
                                    padding: "2px 8px", borderRadius: "99px",
                                    fontWeight: "500"
                                }}>
                                    {r.type}
                                </span>
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary, #9ca3af)" }}>{r.detail}</div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
