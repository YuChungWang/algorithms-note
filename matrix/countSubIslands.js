// https://leetcode.com/problems/count-sub-islands/

// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's
// (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any
// cells outside of the grid are considered water cells.

// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells
// that make up this island in grid2.

// Return the number of islands in grid2 that are considered sub-islands.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// Output: 2 
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.

const countSubIslands = (grid1, grid2) => {
  let output = 0;
  let isSub = false;
  
  const dfs = (row, col) => {
    if (grid2[row][col] === 0) {
      return;
    }
    
    grid2[row][col] = 0;
    if (row > 0) {
      if (grid2[row - 1][col] === 1 && grid1[row - 1][col] === 0) {
        isSub = false;
      }
      dfs(row - 1, col);
    }
    if (row < grid2.length - 1) {
      if (grid2[row + 1][col] === 1 && grid1[row + 1][col] === 0) {
        isSub = false;
      }
      dfs(row + 1, col);
    }
    if (col > 0) {
      if (grid2[row][col - 1] === 1 && grid1[row][col - 1] === 0) {
        isSub = false;
      }
      dfs(row, col - 1);
    }
    if (col < grid2[0].length - 1) {
      if (grid2[row][col + 1] === 1 && grid1[row][col + 1] === 0) {
        isSub = false;
      }
      dfs(row, col + 1);
    }
  }
  
  for (let row = 0; row < grid2.length; row++) {
    for (let col = 0; col < grid2[0].length; col++) {
      isSub = false;
      if (
        grid2[row][col] === 1 &&
        grid1[row][col] === 1
      ) {
        isSub = true;
        dfs(row, col);
      }
      
      if (isSub) {
        output += 1;
      }
    }
  }
  
  return output;
};
