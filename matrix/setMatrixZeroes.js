// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// ---------------------------------------------------------------------------
// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

const setZeroes = (matrix) => {
  let track = [];
  
  // find zeros
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === 0) {
        track.push([row, col]);
      }
    }
  }
  
  while (track.length) {
    const [row, col] = track.shift();
    
    // update row
    for (var y = 0; y < matrix.length; y++) {
      matrix[y][col] = 0;
    }

    // update column
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[row][x] = 0;
    }
  }
  
  return matrix;
};
