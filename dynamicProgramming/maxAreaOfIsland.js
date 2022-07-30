// https://leetcode.com/problems/max-area-of-island/

// You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
// connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid
// are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

const maxAreaOfIsland = (grid) => {
  let count = 0;
  let maxCount = 0;

  const dfs = (row, col) => {
    if (grid[row][col] === 1) {
      count += 1;
      maxCount = Math.max(count, maxCount);
      grid[row][col] = 0;

      if (row > 0) {
        dfs(row - 1, col); // top
      }
      if (row < grid.length - 1) {
        dfs(row + 1, col); // bottom
      }
      if (col < grid[0].length - 1) {
        dfs(row, col + 1); // right
      }
      if (col > 0) {
        dfs(row, col - 1); // left
      }
    }
  }

  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid[0].length; i++) {
      count = 0;
      dfs(j, i);
    }
  }

  return maxCount;
};
