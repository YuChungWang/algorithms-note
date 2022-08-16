// https://leetcode.com/problems/number-of-closed-islands/

// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally
// connected group of 0s and a closed island is an island totally (all left, top, right, bottom)
// surrounded by 1s.

// Return the number of closed islands.

// ---------------------------------------------------------------------------
// Example 1:

// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation: 
// Islands in gray are closed because they are completely surrounded by water (group of 1s).

// ---------------------------------------------------------------------------
// Example 2:

// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1

// ---------------------------------------------------------------------------
// Example 3:

// Input: grid = [[1,1,1,1,1,1,1],
//                [1,0,0,0,0,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,1,0,1,0,1],
//                [1,0,1,1,1,0,1],
//                [1,0,0,0,0,0,1],
//                [1,1,1,1,1,1,1]]
// Output: 2

const closedIsland = (grid) => {
  let output = 0;
  let queue = [];
  
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[0].length; row++) {
      let isClosed = false;

      if (grid[col][row] === 0) {
        isClosed = true;
        queue = [[col, row]];
      }
        
      while (queue.length) {
        const [currCol, currRow] = queue.shift();
        
        if (grid[currCol][currRow] === 0) {
          if (
            [0, grid.length - 1].includes(currCol) ||
            [0, grid[0].length - 1].includes(currRow)
          ) {
            isClosed = false;
          }
          grid[currCol][currRow] = 1;

          if (currCol > 0) {
            queue.push([currCol - 1, currRow]);
          }
          if (currCol < grid.length - 1) {
            queue.push([currCol + 1, currRow]);
          }
          if (currRow > 0) {
            queue.push([currCol, currRow - 1]);
          }
          if (currRow < grid[0].length - 1) {
            queue.push([currCol, currRow + 1]);
          }
        }
      }
      
      if (isClosed) {
        output += 1;
      }
    }
  }
  
  return output;
};
