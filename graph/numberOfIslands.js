// https://leetcode.com/problems/number-of-islands/

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or
// vertically. You may assume all four edges of the grid are all surrounded by water.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const numIslands = (grid) => {
  let count = 0;

  const dfs = (x, y) => {
    if (grid[x][y] === '1') {
      grid[x][y] = '0';
    } else {
      return;
    }

    // right
    if (x < grid.length - 1) {
      dfs(x + 1, y);
    }
    // bottom
    if (y < grid[x].length - 1) {
      dfs(x, y + 1);
    }
    // left
    if (x > 0 && x < grid.length) {
      dfs(x - 1, y);
    }
    // top
    if (y > 0 && y < grid[x].length) {
      dfs(x, y - 1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;
};
