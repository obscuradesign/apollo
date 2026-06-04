import { PATH_GRAPHS } from "../src/data/pathGraphs.js";
import { buildAdjacency, findPath } from "../src/utils/pathfinding.js";

const HSS_SEGMENTS = Object.fromEntries(
  Object.entries(PATH_GRAPHS["HSS"]?.segments || {})
);
const HSS_ADJ = buildAdjacency(HSS_SEGMENTS);

console.log("=== Testing Unified HSS Wayfinding Graph (Floors 1, 2, and 3) ===");
console.log(`Loaded ${Object.keys(HSS_SEGMENTS).length} total segments.`);
console.log(`Generated adjacency with ${Object.keys(HSS_ADJ).length} unique node keys.`);

// Test Case 1: Floor 1 local routing (Room 150 -> Room 104)
const path1 = findPath(HSS_ADJ, "HSS-1:hss-150", "HSS-1:hss-104");
console.log("\nRoute [Room 150 (F1 Left) -> Room 104 (F1 Right)]:");
console.log(path1 ? `✅ Path found (${path1.length} steps): ${path1.join(" -> ")}` : "❌ Path not found!");

// Test Case 2: Cross-floor routing from Floor 1 Room 150 (Left) to Floor 2 Room 250 (Left)
// Should route via left-stairs or exit-1to2-only
const path2 = findPath(HSS_ADJ, "HSS-1:hss-150", "HSS-2:hss-250");
console.log("\nRoute [Room 150 (F1 Left) -> Room 250 (F2 Left)]:");
console.log(path2 ? `✅ Path found (${path2.length} steps): ${path2.join(" -> ")}` : "❌ Path not found!");

// Test Case 3: Cross-floor routing from Floor 1 Room 104 (Right) to Floor 2 Room 207 (Right)
// Should route via exit-1to2-only-2 (right exit) or center-stairs
const path3 = findPath(HSS_ADJ, "HSS-1:hss-104", "HSS-2:hss-207");
console.log("\nRoute [Room 104 (F1 Right) -> Room 207 (F2 Right)]:");
console.log(path3 ? `✅ Path found (${path3.length} steps): ${path3.join(" -> ")}` : "❌ Path not found!");

// Test Case 4: Complete cross-floor routing from Floor 1 Room 150 (Left) to Floor 3 Philosophy Department (F3 Left)
// Since Philosophy is locked on F3, it must route up the Left Stairs to Floor 3 directly from Floor 2 Left!
const path4 = findPath(HSS_ADJ, "HSS-1:hss-150", "HSS-3:dept-hallway");
console.log("\nRoute [Room 150 (F1 Left) -> Philosophy Dept (F3 Left)]:");
console.log(path4 ? `✅ Path found (${path4.length} steps): ${path4.join(" -> ")}` : "❌ Path not found!");

if (path1 && path2 && path3 && path4) {
  console.log("\n✅ All HSS Floor 1, 2, and 3 cross-floor routing assertions passed flawlessly!");
} else {
  console.error("\n❌ Routing assertions failed. Please verify graph edges.");
  process.exit(1);
}
