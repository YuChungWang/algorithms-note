// https://leetcode.com/problems/n-queens/description/

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and
// an empty space, respectively.

// ---------------------------------------------------------------------------
// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// ---------------------------------------------------------------------------
// Example 2:

// Input: n = 1
// Output: [["Q"]]

// ---------------------------------------------------------------------------
// Constraints:

// 1 <= n <= 9

const solveNQueens = (n) => {
  const vertical = new Set();
  const posDiag = new Set() // (rol + col)
  const negDiag = new Set() // (rol - col)
  const output = [];
  const board = [...Array(n)].map(() => Array(n).fill('.'));

  const dfs = (row) => {
    if (row === n) {
      let subset = [];

      for (let row = 0; row < n; row++) {
        subset.push(board[row].join(''));
      }

      output.push(subset);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        vertical.has(col) ||
        posDiag.has(row + col) ||
        negDiag.has(row - col)
      ) {
        continue;
      }

      vertical.add(col);
      posDiag.add(row + col);
      negDiag.add(row - col);
      board[row][col] = 'Q';

      dfs(row + 1);

      vertical.delete(col);
      posDiag.delete(row + col);
      negDiag.delete(row - col);
      board[row][col] = '.';
    }
  }

  dfs(0);

  return output;
};
