// https://leetcode.com/problems/course-schedule/

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
// take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// ---------------------------------------------------------------------------
// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// ---------------------------------------------------------------------------
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished
// course 1. So it is impossible.

let graph;
let visiting;
let visited;

var canFinish = function(numCourses, prerequisites) {
  graph = new Map();
  visiting = new Set();
  visited = new Set();
  
  for (let [v, e] of prerequisites) {
    if (graph.has(v)) {
      let edges = graph.get(v);
      edges.push(e);
      graph.set(v, edges);
    } else {
      graph.set(v, [e]);
    }
  }
  
  for (const [v, e] of graph) {
    if (dfs(v)) {
      return false;
    }
  }
  
  return true;
};

const dfs = (v) => {
  visiting.add(v);
  const edges = graph.get(v);
  
  if (edges) {
    for (let e of edges) {
      if (visited.has(e)) {
        continue;
      }
      
      if (visiting.has(e) || dfs(e)) {
        return true;
      }
    }
  }
  
  visiting.delete(v);
  visited.add(v);
  
  return false;
};
