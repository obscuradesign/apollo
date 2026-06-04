import { PATH_GRAPHS } from "../src/data/pathGraphs.js";
import { buildAdjacency, findPath } from "../src/utils/pathfinding.js";

const HSS_SEGMENTS = Object.fromEntries(
  Object.entries(PATH_GRAPHS["HSS"]?.segments || {})
);
const HSS_ADJ = buildAdjacency(HSS_SEGMENTS);

console.log("=== Testing HSS Wayfinding Graph ===");
console.log(`Loaded ${Object.keys(HSS_SEGMENTS).length} segments.`);
console.log(`Generated adjacency with ${Object.keys(HSS_ADJ).length} unique node keys.`);

// Test Case 1: Route from Center Stairs to Philosophy & Social Sciences department
const path1 = findPath(HSS_ADJ, "HSS-3:center-stairs-node", "HSS-3:dept-hallway");
console.log("\nRoute [Center Stairs -> Philosophy Dept Hallway]:");
console.log(path1 ? `✅ Path found (${path1.length} steps): ${path1.join(" -> ")}` : "❌ Path not found!");

// Test Case 2: Route between Philosophy and History departments
const path2 = findPath(HSS_ADJ, "HSS-3:hss-352", "HSS-3:hss-303");
console.log("\nRoute [Across Departments: Philosophy HSS 352 -> History HSS 303]:");
console.log(path2 ? `✅ Path found (${path2.length} steps): ${path2.join(" -> ")}` : "❌ Path not found!");

// Test Case 3: Route from Left Stairs to Philosophy Dept
// This should fail to prevent users from using the left stairs as a shortcut across Floor 3.
const path3 = findPath(HSS_ADJ, "HSS-3:left-stairs-node", "HSS-3:dept-hallway");
console.log("\nRoute [Shortcut check: Left Stairs -> Philosophy Dept]:");
console.log(path3 ? `❌ Path found (Left stairs shortcut allowed: ${path3.join(" -> ")})` : "✅ Path not found (Left stairs isolated successfully!)");

if (path1 && path2 && !path3) {
  console.log("\n✅ HSS Floor 3 routing tests passed successfully! General public can navigate to Philosophy, while Left Stairs shortcut is locked.");
} else {
  console.error("\n❌ HSS routing tests failed. Please inspect graph connectivity.");
  process.exit(1);
}
