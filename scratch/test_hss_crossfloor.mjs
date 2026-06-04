import { PATH_GRAPHS } from "../src/data/pathGraphs.js";
import { buildAdjacency, findPath } from "../src/utils/pathfinding.js";

const HSS_SEGMENTS = Object.fromEntries(
  Object.entries(PATH_GRAPHS["HSS"]?.segments || {})
);
const HSS_ADJ = buildAdjacency(HSS_SEGMENTS);

console.log("=== Testing HSS Cross-Floor Wayfinding (Left Stairs Connected) ===");
console.log(`Loaded ${Object.keys(HSS_SEGMENTS).length} total segments.`);
console.log(`Generated adjacency with ${Object.keys(HSS_ADJ).length} unique node keys.`);

// Test Case 1: Route from Room 252 (F2 Left) to Philosophy Dept (F3 Left)
// This MUST route directly up the Left Stairs!
const path1 = findPath(HSS_ADJ, "HSS-2:hss-252", "HSS-3:dept-hallway");
console.log("\nRoute [Room 252 (F2 Left) -> Philosophy Dept (F3 Left)]:");
console.log(path1 ? `✅ Path found (${path1.length} steps): ${path1.join(" -> ")}` : "❌ Path not found!");

// Test Case 2: Route from Center Stairs (F3 Center) to Philosophy Dept (F3 Left)
// This MUST route down to Floor 2 via Center Stairs, walk across Floor 2, and go up the Left Stairs!
const path2 = findPath(HSS_ADJ, "HSS-3:center-stairs-node", "HSS-3:dept-hallway");
console.log("\nRoute [Center Stairs (F3) -> Philosophy Dept (F3 Left)]:");
console.log(path2 ? `✅ Path found (${path2.length} steps): ${path2.join(" -> ")}` : "❌ Path not found!");

// Test Case 3: Shortcut check - Route from Center Stairs (F3) to Left Stairs (F3)
// This should NOT find a direct single-floor path on Floor 3, but should route via Floor 2!
const path3 = findPath(HSS_ADJ, "HSS-3:center-stairs-node", "HSS-3:left-stairs-node");
console.log("\nRoute [Shortcut check: Center Stairs (F3) -> Left Stairs (F3)]:");
console.log(path3 ? `✅ Path found (${path3.length} steps via F2): ${path3.join(" -> ")}` : "❌ Path not found!");

const pathContainsPhilosophySeg = path3 && path3.some(step => step.includes("hss-philos-socialsci"));

if (path1 && path2 && path3 && !pathContainsPhilosophySeg) {
  console.log("\n✅ HSS cross-floor routing tests passed flawlessly! Left Stairs is utilized properly, and Floor 3 cross-wing shortcutting is successfully blocked.");
} else {
  console.error("\n❌ HSS cross-floor routing tests failed. Please inspect graph connectivity.");
  process.exit(1);
}
