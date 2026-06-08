import { PATH_GRAPHS } from '../src/data/pathGraphs.js';
import { buildAdjacency, findPath } from '../src/utils/pathfinding.js';

const segments = PATH_GRAPHS["CAMPUS"].segments;
const adj = buildAdjacency(segments);

console.log("\nTesting: SSC-1:ssc-101 to SSC-3:ssc-335");
const start = process.argv[2] || "HSS-1:hss-156";
const end = process.argv[3] || "MSB-1:msb-107";
const path2 = findPath(adj, start, end);
console.log("Path length:", path2 ? path2.length : "No path found");
if (path2) {
    let totalWeight = 0;
    for (const seg of path2) {
        const s = segments[seg];
        const w = s[2] !== undefined ? s[2] : 1;
        totalWeight += w;
    }
    console.log("Total Weight:", totalWeight);
    console.log("Segments:", path2.slice(0, 3), "...", path2.slice(-3));
}
