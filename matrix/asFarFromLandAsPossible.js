// https://leetcode.com/problems/as-far-from-land-as-possible/

// Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land,
// find a water cell such that its distance to the nearest land cell is maximized, and return the distance.
// If no land or water exists in the grid, return -1.

// The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and
// (x1, y1) is |x0 - x1| + |y0 - y1|.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
// Output: 2
// Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
// Output: 4
// Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.

const maxDistance = (grid) => {
  let queue = [];
  let maxDistance = -1;

  const queueHandler = (row, col, distance) => {
    if (row > 0 && grid[row - 1][col] === 0) {
      queue.push([row - 1, col, distance + 1]);
    }
    if (row < grid.length - 1 && grid[row + 1][col] === 0) {
      queue.push([row + 1, col, distance + 1]);
    }
    if (col > 0 && grid[row][col - 1] === 0) {
      queue.push([row, col - 1, distance + 1]);
    }
    if (col < grid[0].length - 1 && grid[row][col + 1] === 0) {
      queue.push([row, col + 1, distance + 1]);
    }
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        queueHandler(row, col, 0);
      }
    }
  }

  if (queue.length === 0) {
    return maxDistance;
  }

  while (queue.length) {
    let [row, col, distance] = queue.shift();
    
    if (grid[row][col] > 1) {
      continue;
    }
    
    grid[row][col] = distance;
    maxDistance = Math.max(maxDistance, distance);

    queueHandler(row, col, distance);
  }

  return maxDistance;
};
