// https://leetcode.com/problems/word-search-ii/description/

// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or
// vertically neighboring. The same letter cell may not be used more than once in a word.

// ---------------------------------------------------------------------------
// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// ---------------------------------------------------------------------------
// Example 2:

// Input: board = [["a","b"],["c","d"]], words = ["abcb"]
// Output: []


// ---------------------------------------------------------------------------
// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 12
// board[i][j] is a lowercase English letter.
// 1 <= words.length <= 3 * 10^4
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

const findWords = (board, words) => {
  let output = [];
  let root = {};
  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  const addWord = (word) => {
    let node = root;

    for (let letter of word) {
      if (!node[letter]) {
        node[letter] = {};
      }

      node = node[letter];
    }

    node.word = word;
  };

  for (let word of words) {
    addWord(word);
  }

  const dfs = (node, row, col) => {
    if (node.word) {
      output.push(node.word);
      node.word = null;
    }

    if (
      row < 0 ||
      row > board.length ||
      col < 0 ||
      col > board[0].length ||
      !node[board[row][col]]
    ) {
      return;
    }

    const letter = board[row][col];
    board[row][col] = '#';
    for (let [rowOffset, colOffset] of dirs) {
      dfs(node[letter], row + rowOffset, col + colOffset);
    }

    board[row][col] = letter;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(root, row, col);
    }
  }

  console.log(output);

  return output;
}

const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
const words = ["oath","pea","eat","rain"];

findWords(board, words);
