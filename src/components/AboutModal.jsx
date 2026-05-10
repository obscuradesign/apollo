import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutModal = ({ onClose }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: "fixed", inset: 0, zIndex: 1000,
                    background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
                    display: "flex", justifyContent: "center", alignItems: "center", padding: "20px"
                }}
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 20, scale: 0.95 }}
                    animate={{ y: 0, scale: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        width: "100%", maxWidth: "450px",
                        background: "var(--bg-header, #1f2937)",
                        borderRadius: "16px",
                        padding: "24px",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        border: "1px solid var(--border-color, #374151)",
                        color: "var(--text-primary, white)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        maxHeight: "90vh",
                        overflowY: "auto"
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>About Apollo</h2>
                        <button
                            onClick={onClose}
                            style={{
                                background: "none", border: "none", cursor: "pointer",
                                fontSize: "1.2rem", color: "var(--text-secondary, #9ca3af)",
                                padding: "4px"
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    <div>
                        <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", color: "var(--text-secondary, #9ca3af)" }}>What is Apollo?</h3>
                        <p style={{ margin: 0, lineHeight: "1.5" }}>
                            Apollo is an interactive campus map designed to help you easily navigate the SMC campus, find your classrooms, SI sessions, departments, and check live schedules.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", color: "var(--text-secondary, #9ca3af)" }}>How it works</h3>
                        <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.5", display: "flex", flexDirection: "column", gap: "6px" }}>
                            <li><strong>Tap a building</strong> to explore its floors and rooms.</li>
                            <li><strong>Use the search</strong> (magnifying glass) to find specific classes, professors, or SI sessions.</li>
                            <li><strong>Toggle Light/Dark mode</strong> by tapping the moon/sun icon.</li>
                        </ul>
                    </div>

                    <div style={{ marginTop: "8px", paddingTop: "16px", borderTop: "1px solid var(--border-color, #374151)" }}>
                        <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", color: "var(--text-secondary, #9ca3af)" }}>Credits</h3>
                        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-secondary, #9ca3af)", lineHeight: "1.5" }}>
                            Created by Kevin Davidson. Data is currently from Spring 2026. Credit for the map goes to Santa Monica College.

                        </p>
                    </div>

                    <div style={{ marginTop: "8px", paddingTop: "16px", borderTop: "1px solid var(--border-color, #374151)" }}>
                        <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem", color: "var(--text-secondary, #9ca3af)" }}>Disclaimer & Privacy</h3>
                        <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary, #9ca3af)", lineHeight: "1.5" }}>
                            Apollo is an independent project and is not officially affiliated with Santa Monica College. All scheduling and map data is provided "as-is" for informational purposes. Apollo does not collect personal data; your starred items and theme preferences are stored locally on your device. Anonymous usage metrics are collected via Vercel Analytics to improve the app.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        style={{
                            marginTop: "8px",
                            padding: "10px 16px",
                            background: "#3b82f6", // Blue color
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            width: "100%",
                            transition: "background 0.2s"
                        }}
                        onMouseEnter={(e) => e.target.style.background = "#2563eb"}
                        onMouseLeave={(e) => e.target.style.background = "#3b82f6"}
                    >
                        Got it
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
