import { PATH_GRAPHS } from "../src/data/pathGraphs.js";
import { buildAdjacency, findPath } from "../src/utils/pathfinding.js";

const HSS_SEGMENTS = Object.fromEntries(
  Object.entries(PATH_GRAPHS["HSS"]?.segments || {})
);
const HSS_ADJ = buildAdjacency(HSS_SEGMENTS);

const path = findPath(HSS_ADJ, "HSS-1:hss-104", "HSS-3:mens-restroom");
console.log("Path from HSS-104 to F3 Men's Restroom:");
console.log(path);
