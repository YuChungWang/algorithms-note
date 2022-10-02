// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "()"
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "()[]{}"
// Output: true

// ---------------------------------------------------------------------------
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = (s) => {
  let stack = [];
  
  for (let c of s) {
    if (['(', '{', '['].includes(c)) {
      stack.push(c);
    } else {
      let startPair = '';
      switch (c) {
        case ')':
          startPair = '(';
          break;
        case ']':
          startPair = '[';
          break;
        case '}':
          startPair = '{';
          break;
        default:
          break;
      }
      if (stack[stack.length - 1] !== startPair) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};
