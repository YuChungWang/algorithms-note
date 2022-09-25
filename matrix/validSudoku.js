// https://leetcode.com/problems/valid-sudoku/

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the
// following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// ---------------------------------------------------------------------------
// Example 1:

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

const isValidSudoku = (board) => {
  const rowSets = [...Array(board.length)].map(() => new Set());
  const sectionSets = [...Array(board.length)].map(() => new Set());
  
  for (let row = 0; row < board.length; row++) {
    const colSet = new Set();
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== '.') {
        let section = null;
        
        if (row <= 2) {
          if (col / 3 < 1) {
            section = 0;
          } else if (col / 3 < 2) {
            section = 1;
          } else {
            section = 2;
          }
        } else if (row > 2 && row <= 5) {
          if (col / 3 < 1) {
            section = 3;
          } else if (col / 3 < 2) {
            section = 4;
          } else {
            section = 5;
          }
        } else {
          if (col / 3 < 1) {
            section = 6;
          } else if (col / 3 < 2) {
            section = 7;
          } else {
            section = 8;
          }
        }
        
        if (
          colSet.has(board[row][col]) ||
          rowSets[col].has(board[row][col]) ||
          sectionSets[section].has(board[row][col])
        ) {
          return false;
        } else {
          colSet.add(board[row][col]);
          rowSets[col].add(board[row][col]);
          sectionSets[section].add(board[row][col]);
        }
      }
    }
  }
  
  return true;
};
