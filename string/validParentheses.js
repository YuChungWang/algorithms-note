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
  const arr = s.split('');
  let i = 0;
  let j = 0;
  let k = 0;
  let closeSymbolQueue = [];
  let isPass = true;

  arr.forEach((symbol) => {
    if (!isPass) {
      return;
    } else if (
      i < 0 ||
      j < 0 ||
      k < 0 ||
      (
        [')', '}', ']'].includes(symbol) &&
        symbol !== closeSymbolQueue[0]
      )
    ) {
      isPass = false;
      return;
    }

    switch (symbol) {
      case '(':
        i += 1;
        closeSymbolQueue.unshift(')');
        break;
      case ')':
        i -= 1;
        closeSymbolQueue.shift();
        break;
      case '[':
        j += 1;
        closeSymbolQueue.unshift(']');
        break;
      case ']':
        j -= 1;
        closeSymbolQueue.shift();
        break;
      case '{':
        k += 1;
        closeSymbolQueue.unshift('}');
        break;
      case '}':
        k -= 1;
        closeSymbolQueue.shift();
        break;
      default:
        break;
    }
  });

  return i === 0 && j === 0 && k === 0 && isPass;
};
