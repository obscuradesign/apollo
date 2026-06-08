/**
 * Indoor wayfinding — Dijkstra shortest-path solver.
 *
 * Works with the segment-based graph format from pathGraphs.js.
 * Converts segments to an adjacency list on first call, then runs Dijkstra's Algorithm
 * to find the physically shortest path (factoring in segment weights).
 */

/**
 * Converts the clean segment format into a Dijkstra-ready adjacency list.
 * Each segment is bidirectional: "Seg_1": ["A", "B", weight] produces edges A→B and B→A.
 *
 * @param {Object} segments - { segmentId: [endpointA, endpointB, weight] }
 * @returns {Object} adjacency - { nodeId: [{ segment, neighbor, weight }, ...] }
 */
export function buildAdjacency(segments) {
  const adj = {};
  for (const [segId, val] of Object.entries(segments)) {
    const a = val[0];
    const b = val[1];
    const weight = val[2] !== undefined ? val[2] : 1; // Default to 1 if no weight provided
    const aNorm = a.toLowerCase();
    const bNorm = b.toLowerCase();
    (adj[aNorm] ??= []).push({ segment: segId, neighbor: bNorm, weight });
    (adj[bNorm] ??= []).push({ segment: segId, neighbor: aNorm, weight });
  }
  return adj;
}

/**
 * Dijkstra's shortest-path solver for weighted campus and indoor floor graphs.
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

  const distances = {};
  const previous = {};
  // Priority queue holds [distance, nodeId]
  const queue = [[0, sNorm]];
  const visited = new Set();
  
  distances[sNorm] = 0;

  while (queue.length > 0) {
    // Sort descending so we can pop from the end (O(1)) instead of shift()
    queue.sort((a, b) => b[0] - a[0]);
    const [dist, current] = queue.pop();

    if (current === eNorm) {
      break;
    }

    // Skip if we've already finalized the shortest path to this node
    if (visited.has(current)) continue;
    visited.add(current);

    for (const { segment, neighbor, weight } of adjacency[current]) {
      if (visited.has(neighbor)) continue;

      const alt = dist + weight;
      if (distances[neighbor] === undefined || alt < distances[neighbor]) {
        distances[neighbor] = alt;
        previous[neighbor] = { node: current, segment };
        queue.push([alt, neighbor]);
      }
    }
  }

  // If we never reached the end node
  if (distances[eNorm] === undefined) return null;

  // Reconstruct path backwards
  const path = [];
  let curr = eNorm;
  while (curr !== sNorm) {
    const prevNodeInfo = previous[curr];
    if (!prevNodeInfo) return null; // Safety fallback
    path.push(prevNodeInfo.segment);
    curr = prevNodeInfo.node;
  }

  return path.reverse();
}
