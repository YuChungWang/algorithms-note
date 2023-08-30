// https://leetcode.com/problems/surrounded-regions/

// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// ---------------------------------------------------------------------------
// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.

// ---------------------------------------------------------------------------
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

// ---------------------------------------------------------------------------
// Example 3:

// Input: board = [["X","X","X"],["X","O","X"],["X","X","X"]]
// Output: [["X","X","X"],["X","X","X"],["X","X","X"]]

// ---------------------------------------------------------------------------
// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

const solve = (board) => {
  const changeSymbol = (row, col) => {
    if (board[row][col] !== 'O') {
      return;
    }

    board[row][col] = 'T';

    if (row > 0) {
      changeSymbol(row - 1, col);
    }
    if (row < board.length - 1) {
      changeSymbol(row + 1, col);
    }
    if (col > 0) {
      changeSymbol(row, col - 1);
    }
    if (col < board[0].length - 1) {
      changeSymbol(row, col + 1);
    }
  }

  for (let row = 0; row < board.length; row++) {
    if (board[row][0] === 'O') {
      changeSymbol(row, 0);
    }
    if (board[row][board[0].length - 1] === 'O') {
      changeSymbol(row, board[0].length - 1);
    }
  }

  for (let col = 0; col < board[0].length; col++) {
    if (board[0][col] === 'O') {
      changeSymbol(0, col);
    }
    if (board[board.length - 1][col] === 'O') {
      changeSymbol(board.length - 1, col);
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'T') {
        board[row][col] = 'O';
      } else if (board[row][col] === 'O') {
        board[row][col] = 'X';
      }
    }
  }

  return board;
}
