// https://leetcode.com/problems/rotting-oranges/

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// ---------------------------------------------------------------------------
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

const orangesRotting = (grid) => {
  let queue = [];
  let output = 0;
  
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[0].length; row++) {
      if (grid[col][row] === 2) {
        queue.push([col, row, 0]);
      }
    }
  }
  
  let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  while (queue.length) {
    const current = queue.shift();
    
    if (grid[current[0]][current[1]] === 1) {
      output = Math.max(output, current[2]);
      grid[current[0]][current[1]] = 2;
    }

    dir.forEach((d) => {
      const shiftY = current[0] + d[0];
      const shiftX = current[1] + d[1];

      if (
        shiftY > -1 &&
        shiftY < grid.length &&
        shiftX > -1 &&
        shiftX < grid[0].length &&
        grid[shiftY][shiftX] === 1
      ) {
        queue.push([shiftY, shiftX, current[2] + 1]);
      }
    });
  }
  
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[0].length; row++) {
      if (grid[col][row] === 1) {
        return -1;
      }
    }
  }
  
  return output;
};
