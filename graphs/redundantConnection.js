// https://leetcode.com/problems/redundant-connection/

// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added.
// The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.
// The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes.
// If there are multiple answers, return the answer that occurs last in the input.

// ---------------------------------------------------------------------------
// Example 1:

// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]
// Example 2:

// ---------------------------------------------------------------------------
// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]
 
// ---------------------------------------------------------------------------
// Constraints:

// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ai < bi <= edges.length
// ai != bi
// There are no repeated edges.
// The given graph is connected.

// dfs
// const findRedundantConnection = (edges) => {
//   let graph = new Map();
//   let output = [];

//   const dfs = (v, e, visited) => {
//     visited.add(v);

//     if (graph.has(v)) {
//       const edges = graph.get(v);

//       if (edges.has(e)) {
//         return true;
//       }

//       for (let edge of edges) {
//         if (!visited.has(edge) && dfs(edge, e, visited)) {
//           return true;
//         }
//       }
//     }

//     return false;
//   };

//   for (let [vertex, edge] of edges) {
//     if (dfs(vertex, edge, new Set())) {
//       output = [vertex, edge];
//     }

//     if (!graph.has(vertex)) {
//       graph.set(vertex, new Set());
//     }
//     if (!graph.has(edge)) {
//       graph.set(edge, new Set());
//     }

//     graph.get(vertex).add(edge);
//     graph.get(edge).add(vertex);
//   };

//   return output;
// }

// union find
const findRedundantConnection = (edges) => {
  let par = Array(edges.length + 1).fill(0).map((_, index) => index);

  const find = (vertex) => {
    return vertex === par[vertex] ? vertex : find(par[vertex]);
  }

  const union = (vertex, edge) => {
    par[find(edge)] = find(vertex);
  }

  for (const [vertex, edge] of edges) {
    if (find(vertex) === find(edge)) {
      return [vertex, edge];
    } else {
      union(vertex, edge);
    }
  }
}

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]));
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]));
