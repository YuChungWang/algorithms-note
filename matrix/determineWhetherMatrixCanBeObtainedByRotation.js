// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/

// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by
// rotating mat in 90-degree increments, or false otherwise.

// ---------------------------------------------------------------------------
// Example 1:

// Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.

// ---------------------------------------------------------------------------
// Example 2:

// Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
// Output: false
// Explanation: It is impossible to make mat equal to target by rotating mat.

// ---------------------------------------------------------------------------
// Example 3:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.

const findRotation = (mat, target) => {
  let isEqualOne = true;
  let isEqualTwo = true;
  let isEqualThree = true;
  let isEqualFour = true;
  
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      if (mat[row][col] !== target[row][col]) {
        isEqualOne = false;
      }
      if (mat[mat.length - 1 - col][row] !== target[row][col]) {
        isEqualTwo = false;
      }
      if (mat[mat.length - 1 - row][mat[0].length - 1 - col] !== target[row][col]) {
        isEqualThree = false;
      }
      if (mat[col][mat.length - 1 - row] !== target[row][col]) {
        isEqualFour = false;
      }
      
      if (!isEqualOne && !isEqualTwo && !isEqualThree && !isEqualFour) {
        break;
      }
    }
  }
  
  return isEqualOne || isEqualTwo || isEqualThree || isEqualFour;
};
