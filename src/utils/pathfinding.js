/**
 * Indoor wayfinding — BFS shortest-path solver.
 *
 * Works with the segment-based graph format from pathGraphs.js.
 * Converts segments to an adjacency list on first call, then runs BFS.
 */

/**
 * Converts the clean segment format into a BFS-ready adjacency list.
 * Each segment is bidirectional: "Seg_1": ["A", "B"] produces edges A→B and B→A.
 *
 * @param {Object} segments - { segmentId: [endpointA, endpointB] }
 * @returns {Object} adjacency - { nodeId: [{ segment, neighbor }, ...] }
 */
export function buildAdjacency(segments) {
  const adj = {};
  for (const [segId, [a, b]] of Object.entries(segments)) {
    const aNorm = a.toLowerCase();
    const bNorm = b.toLowerCase();
    (adj[aNorm] ??= []).push({ segment: segId, neighbor: bNorm });
    (adj[bNorm] ??= []).push({ segment: segId, neighbor: aNorm });
  }
  return adj;
}

/**
 * BFS shortest-path solver for indoor floor graphs.
 *
 * @param {Object} adjacency - Adjacency list from buildAdjacency().
 * @param {string} startId   - Starting node ID (room or exit).
 * @param {string} endId     - Destination node ID (room or exit).
 * @returns {string[]|null}  Array of SVG segment IDs to highlight, or null if no path exists.
 */
export function findPath(adjacency, startId, endId) {
  const sNorm = startId?.toLowerCase();
  const eNorm = endId?.toLowerCase();
  if (sNorm === eNorm) return [];
  if (!adjacency[sNorm] || !adjacency[eNorm]) return null;

  const queue = [[sNorm, []]]; // [currentNode, segmentsUsed[]]
  const visited = new Set([sNorm]);

  while (queue.length > 0) {
    const [current, segments] = queue.shift();

    for (const { segment, neighbor } of adjacency[current]) {
      if (visited.has(neighbor)) continue;
      const newSegments = [...segments, segment];

      if (neighbor === eNorm) return newSegments;

      visited.add(neighbor);
      queue.push([neighbor, newSegments]);
    }
  }

  return null; // No path found
}

