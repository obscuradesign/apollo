import { PATH_GRAPHS } from "../src/data/pathGraphs.js";
import { buildAdjacency, findPath } from "../src/utils/pathfinding.js";

const BUS_SEGMENTS = Object.fromEntries(
  Object.entries(PATH_GRAPHS["BUS"]?.segments || {})
);
const BUS_ADJ = buildAdjacency(BUS_SEGMENTS);

console.log("=== Testing BUS Wayfinding Graph ===");
console.log(`Loaded ${Object.keys(BUS_SEGMENTS).length} segments.`);
console.log(`Generated adjacency with ${Object.keys(BUS_ADJ).length} unique node keys.`);

// Test Case 1: Floor 1 Room to Floor 1 Room
const path1 = findPath(BUS_ADJ, "BUS-1:bus-106", "BUS-1:bus-139");
console.log("\nRoute [BUS 106 (F1) -> BUS 139 (F1)]:");
console.log(path1 ? `Path found (${path1.length} steps): ${path1.join(" -> ")}` : "❌ Path not found!");

// Test Case 2: Floor 1 Room to Floor 2 Room (CSIS Computer Labs cross-floor routing)
const path2 = findPath(BUS_ADJ, "BUS-1:bus-131", "BUS-2:bus-231");
console.log("\nRoute [BUS 131 CSIS Lab (F1) -> BUS 231 CSIS Lab (F2)]:");
console.log(path2 ? `Path found (${path2.length} steps): ${path2.join(" -> ")}` : "❌ Path not found!");

// Test Case 3: Corner Room to Corner Room (F1 Southwest to F2 Northeast)
const path3 = findPath(BUS_ADJ, "BUS-1:bus-143b", "BUS-2:bus-201");
console.log("\nRoute [BUS 143B (F1) -> BUS 201 (F2)]:");
console.log(path3 ? `Path found (${path3.length} steps): ${path3.join(" -> ")}` : "❌ Path not found!");

// Test Case 4: BUS 145 Redirection (Guiding to BUS 143F)
let fromNode = "BUS-1:bus-106";
let toNode = "BUS-1:bus-145";
if (toNode?.toLowerCase() === "bus-1:bus-145") toNode = "BUS-1:bus-143F";
const path4 = findPath(BUS_ADJ, fromNode, toNode);
console.log("\nRoute [BUS 106 (F1) -> BUS 145 (F1) Redirected to 143F]:");
console.log(path4 ? `Path found (${path4.length} steps): ${path4.join(" -> ")}` : "❌ Path not found!");

// Test Case 5: BUS 149A Redirection (Guiding to BUS 143F)
let fromNode5 = "BUS-1:bus-106";
let toNode5 = "BUS-1:bus-149a";
const redirects = ["bus-1:bus-145", "bus-1:bus-149a"];
if (redirects.includes(toNode5?.toLowerCase())) toNode5 = "BUS-1:bus-143F";
const path5 = findPath(BUS_ADJ, fromNode5, toNode5);
console.log("\nRoute [BUS 106 (F1) -> BUS 149A (F1) Redirected to 143F]:");
console.log(path5 ? `Path found (${path5.length} steps): ${path5.join(" -> ")}` : "❌ Path not found!");

// Test Case 6: BUS 151 Direct Routing to Junction 16
const path6 = findPath(BUS_ADJ, "BUS-1:bus-106", "BUS-1:bus-151");
console.log("\nRoute [BUS 106 (F1) -> BUS 151 (F1)]:");
console.log(path6 ? `Path found (${path6.length} steps): ${path6.join(" -> ")}` : "❌ Path not found!");

if (path1 && path2 && path3 && path4 && path5 && path6) {
  console.log("\n✅ Mathematical routing tests passed successfully!");
} else {
  console.error("\n❌ Some routing tests failed. Please inspect connectivity.");
  process.exit(1);
}

