import { PATH_GRAPHS } from "../src/data/pathGraphs.js";
import { buildAdjacency, findPath } from "../src/utils/pathfinding.js";

const HSS_SEGMENTS = Object.fromEntries(
  Object.entries(PATH_GRAPHS["HSS"]?.segments || {}).filter(([id]) => id.startsWith("HSS-2:"))
);
const HSS_ADJ = buildAdjacency(HSS_SEGMENTS);

console.log("=== Testing HSS Floor 2 Wayfinding Graph ===");
console.log(`Loaded ${Object.keys(HSS_SEGMENTS).length} segments.`);
console.log(`Generated adjacency with ${Object.keys(HSS_ADJ).length} unique node keys.`);

// Test Case 1: Route from Center Stairs to Room 250
const path1 = findPath(HSS_ADJ, "HSS-2:center-stairs-node", "HSS-2:hss-250");
console.log("\nRoute [Center Stairs -> Room 250]:");
console.log(path1 ? `✅ Path found (${path1.length} steps): ${path1.join(" -> ")}` : "❌ Path not found!");

// Test Case 2: Route from Left Stairs to Room 207
const path2 = findPath(HSS_ADJ, "HSS-2:left-stairs-node", "HSS-2:hss-207");
console.log("\nRoute [Left Stairs -> Room 207]:");
console.log(path2 ? `✅ Path found (${path2.length} steps): ${path2.join(" -> ")}` : "❌ Path not found!");

// Test Case 3: Route between Room 251 and Room 206
const path3 = findPath(HSS_ADJ, "HSS-2:hss-251", "HSS-2:hss-206");
console.log("\nRoute [Room 251 -> Room 206]:");
console.log(path3 ? `✅ Path found (${path3.length} steps): ${path3.join(" -> ")}` : "❌ Path not found!");

if (path1 && path2 && path3) {
  console.log("\n✅ HSS Floor 2 routing tests passed successfully! All general classroom paths are fully connected.");
} else {
  console.error("\n❌ HSS Floor 2 routing tests failed. Please inspect graph connectivity.");
  process.exit(1);
}
