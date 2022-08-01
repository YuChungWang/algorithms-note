// https://leetcode.com/problems/word-search/

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

const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

var exist = function(board, word) {
  const dfs = (row, col, word, board) => {
    if (!word.length) {
      return true;
    }
    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) {
      return false;
    }

    const currChat = board[row][col];
    const currWord = word.substr(1);
    board[row][col] = 0; // Disable the current character

    const result = dfs(row - 1, col, currWord, board) ||
      dfs(row, col + 1, currWord, board) ||
      dfs(row + 1, col, currWord, board) ||
      dfs(row, col - 1, currWord, board);

    board[row][col] = currChat;

    return result;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (dfs(row, col, word, board)) {
        return true;
      }
    }
  }

  return false;
};
