// https://leetcode.com/problems/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// ---------------------------------------------------------------------------
// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// ---------------------------------------------------------------------------
// Example 2:

// Input: n = 1
// Output: ["()"]

// ---------------------------------------------------------------------------
// Constraints:

// 1 <= n <= 8

const generateParenthesis = (n) => {
  let output = [];

  const dfs = (str, left, right) => {
    if (left > n || right > left) {
      return;
    }
    if (str.length === n * 2) {
      output.push(str);
      return;
    }
    dfs(str + '(', left + 1, right);
    dfs(str + ')', left, right + 1);
  }

  dfs('', 0, 0);

  return output;
};
