// https://leetcode.com/problems/spiral-matrix/

// Given an m x n matrix, return all elements of the matrix in spiral order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// ---------------------------------------------------------------------------
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const spiralOrder = (matrix) => {
  let output = [];
  
  while (matrix.length) {
    const first = matrix.shift();
    output.push(...first);
    
    for (const m of matrix) {
      const val = m.pop();
      if (val) {
        output.push(val);
        m.reverse();
      }
    }
    matrix.reverse();
  }
  
  return output;
};
