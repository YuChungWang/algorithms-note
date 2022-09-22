// https://leetcode.com/problems/rotate-image/

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another
// 2D matrix and do the rotation.

// ---------------------------------------------------------------------------
// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// 1.
// const rotate = (matrix) => {
//   const len = matrix.length;
//   let shift = [];
//   for (let row = 0; row < len; row++) {
//     shift = matrix[row].slice(-len);
//     for (let col = 0; col < len; col++) {
//       matrix[row].pop();
//       matrix[col].unshift(shift[col]);
//     }
//   }
//   return matrix;
// };

// 2.
const rotate = (matrix) => {
  transpose(matrix);
  reflect(matrix);
  return matrix;
};

const transpose = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix.length; col++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }
  
  return matrix;
};

const reflect = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    let left = 0;
    let right = matrix.length - 1;
    
    while (left < right) {
      [matrix[row][left], matrix[row][right]] = [matrix[row][right], matrix[row][left]];
      left += 1;
      right -= 1;
    }
  }
  return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
