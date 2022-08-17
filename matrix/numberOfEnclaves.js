// https://leetcode.com/problems/number-of-enclaves/

// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking
// off the boundary of the grid.

// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number
// of moves.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// Output: 3
// Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// Output: 0
// Explanation: All 1s are either on the boundary or can reach the boundary.

const numEnclaves = (grid) => {
  let isEnclosed = true;
  let count = 0;
  let enclosedCount = 0;
  
  const dfs = (row, col) => {
    if (grid[row][col] === 0) {
      return;
    }
    
    count += 1;
    grid[row][col] = 0;
    if (
      (row === 1 && grid[row - 1][col] === 1) ||
      (row === grid.length - 2 && grid[row + 1][col] === 1) ||
      (col === 1 && grid[row][col - 1] === 1) ||
      (col === grid[0].length - 2 && grid[row][col + 1] === 1)
    ) {
      // boundary
      isEnclosed = false;
    }
    
    if (row > 1) {
      dfs(row - 1, col); // up
    }
    if (row < grid.length - 2) {
      dfs(row + 1, col); // bottom
    }
    if (col > 1) {
      dfs(row, col - 1); // left
    }
    if (col < grid[0].length - 2) {
      dfs(row, col + 1); // right
    }
  };
  
  for (let row = 1; row < grid.length - 1; row++) {
    for (let col = 1; col < grid[0].length - 1; col++) {
      isEnclosed = true;
      count = 0;
      
      if (grid[row][col] === 1) {
        dfs(row, col);
      }
      if (isEnclosed) {
        enclosedCount += count;
      }
    }
  }
  
  return enclosedCount;
};
