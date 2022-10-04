// You are given a matrix of integers field of size n × m representing a game field, and also a matrix of integers figure of
// size 3 × 3 representing a figure. Both matrices contain only 0s and 1s, where 1 means that the cell is occupied, and 0 means
// that the cell is free.
// You choose a position at the top of the game field where you put the figure and then drop it down. The figure falls down
// until it either reaches the ground (bottom of the field) or lands on an occupied cell, which blocks it from falling further.
// After the figure has stopped falling, some of the rows in the field may become fully occupied.
// Your task is to find the dropping position such that at least one full row is formed. As a dropping position you should
// consider the column index of the cell in game field which matches the top left corner of the figure 3 × 3 matrix. If there
// are multiple dropping positions satisfying the condition, feel free to return any of them. If there are no such dropping positions,
// return -1.

// Note: When falling, the 3 × 3 matrix of the figure must be entirely inside the game field, even if the figure matrix is not
// totally occupied.

// ---------------------------------------------------------------------------
// Example 1:
// For field =  [[0, 0, 0],
//               [0, 0, 0],
//               [0, 0, 0],
//               [1, 0, 0],
//               [1, 1, 0]]
// and figure = [[0, 0, 1],
//               [0, 1, 1],
//               [0, 0, 1]]
// the output should be solution(field, figure) = 0. The figure can be dropped only from position 0. When the figure stops falling,
// two fully occupied rows are formed, so dropping position 0 satisfies the condition.

// ---------------------------------------------------------------------------
// Example 2:
// For field =  [[0, 0, 0, 0, 0],
//               [0, 0, 0, 0, 0],
//               [0, 0, 0, 0, 0],
//               [1, 1, 0, 1, 0],
//               [1, 0, 1, 0, 1]]
// and figure = [[1, 1, 1],
//               [1, 0, 1],
//               [1, 0, 1]]
// the output should be solution(field, figure) = 2. The figure can be dropped from three positions - 0, 1, and 2. As you can see
// below, a fully occupied row will be formed only when dropping from position 2:

// ---------------------------------------------------------------------------
// Example 3:
// For field =  [[0, 0, 0, 0],
//               [0, 0, 0, 0],
//               [0, 0, 0, 0],
//               [1, 0, 0, 1],
//               [1, 1, 0, 1]]
// and figure = [[1, 1, 0],
//               [1, 0, 0],
//               [1, 0, 0]]
// the output should be solution(field, figure) = -1. The figure can be dropped from two positions - 0 and 1, and in both cases, a
// fully occupied line won't be obtained

// Constraints:
// 4 ≤ field.length ≤ 100,
// 3 ≤ field[i].length ≤ 100,
// 0 ≤ field[i][j] ≤ 1.

const solution = (field, figure) => {
  let isChecked = false;
  
  const check = (oriRow, oriCol) => {
    const tempField = JSON.parse(JSON.stringify(field));
    for (let row = 0; row < figure.length; row++) {
      for (let col = 0; col < figure[0].length; col++) {
        if (
          tempField[oriRow - 2 + row][oriCol + col] === 1 &&
          figure[row][col] === 1
        ) {
          return;
        }
        tempField[oriRow - row][oriCol - col] = figure[row][col];
      }
    }
    isChecked = true;
    
    for (let row = oriRow; row >= oriRow - 3; row--) {
      let isFilled = true;
      for (let col = 0; col < field[0].length; col++) {
        if (tempField[row][col] === 0) {
          break;
        }
      }
      if (isFilled) {
        return oriCol;
      }
    }
  }
  
  for (let col = 0; col <= field[0].length - 3; col++) {
    isChecked = false;
    
    for (let row = field.length - 1; row >= 2; row--)  {
      if (isChecked) {
        break;
      }
      const oriCol = check(row, col);
      if (oriCol >= 0) {
        return oriCol;
      }
    }
  }
  
  return -1;
}

// Example 1:
// For field =  [[0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 0]]
// and figure = [[0, 0, 1], [0, 1, 1], [0, 0, 1]]
console.warn(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 0]], [[0, 0, 1], [0, 1, 1], [0, 0, 1]]));

// Example 2:
// For field =  [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 1, 0], [1, 0, 1, 0, 1]]
// and figure = [[1, 1, 1], [1, 0, 1], [1, 0, 1]]
console.warn(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 1, 0], [1, 0, 1, 0, 1]], [[1, 1, 1], [1, 0, 1], [1, 0, 1]]));

// Example 3:
// For field =  [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1]]
// and figure = [[1, 1, 0], [1, 0, 0], [1, 0, 0]]
console.warn(solution([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1]], [[1, 1, 0], [1, 0, 0], [1, 0, 0]]));
