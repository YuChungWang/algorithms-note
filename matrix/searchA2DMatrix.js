// https://leetcode.com/problems/search-a-2d-matrix

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following
// properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// ---------------------------------------------------------------------------
// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

const searchMatrix = (matrix, target) => {
  let searchRow = 0;
  let searchCol = 0;
  
  if (matrix.length > 1) {
    let leftRow = 0;
    let rightRow = matrix.length - 1;

    while (leftRow <= rightRow) {
      const midRow = Math.floor((leftRow + rightRow) / 2);
      if (midRow === matrix.length - 1) {
        searchRow = midRow;
        break;
      }
      
      if (
        target >= matrix[midRow][0] &&
        target < matrix[midRow + 1][0]
      ) {
        searchRow = target === matrix[midRow + 1][0] ? midRow + 1 : midRow;
        break;
      }
      
      if (target > matrix[midRow][0]) {
        leftRow = midRow + 1;
      } else {
        rightRow = midRow - 1;
      }
    }
  }
  
  if (matrix[0].length > 1) {
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;
    
    while (leftCol <= rightCol) {
      const midCol = Math.ceil((leftCol + rightCol) / 2);
      
      if (target === matrix[searchRow][midCol]) {
        searchCol = midCol;
        break
      }
      
      if (target > matrix[searchRow][midCol]) {
        leftCol = midCol + 1;
      } else {
        rightCol = midCol - 1;
      }
    }
  }
  
  return matrix[searchRow][searchCol] === target;
};
