// https://leetcode.com/problems/word-search/description/

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally
// or vertically neighboring. The same letter cell may not be used more than once.

// ---------------------------------------------------------------------------
// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// ---------------------------------------------------------------------------
// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// ---------------------------------------------------------------------------
// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.

const exist = (board, word) => {
  let isValid = false;

  const dfs = (row, col, matchIdx, path) => {
    const letter = board[row][col];

    if (
      path[row][col] ||
      letter !== word[matchIdx]
    ) {
      return;
    }

    if (matchIdx + 1 === word.length) {
      isValid = true;
      return;
    }

    path[row][col] = true;

    if (row > 0) {
      dfs(row - 1, col, matchIdx + 1, path);
    }
    if (row < board.length - 1) {
      dfs(row + 1, col, matchIdx + 1, path);
    }
    if (col > 0) {
      dfs(row, col - 1, matchIdx + 1, path);
    }
    if (col < board[0].length - 1) {
      dfs(row, col + 1, matchIdx + 1, path);
    }

    path[row][col] = false;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let path = [...Array(board.length)].map(() => Array(board[0].length).fill(false));
      dfs(row, col, 0, path);

      if (isValid) {
        return true;
      }
    }
  }

  return false;
};
