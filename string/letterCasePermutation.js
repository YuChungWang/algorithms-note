// https://leetcode.com/problems/letter-case-permutation/

// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

const attach = (output, text) => {
  let newOutput = [...output];
  for (let i = 0; i < output.length; i++) {
    newOutput[i] += text;
  }
  
  return newOutput;
};

const letterCasePermutation = (s) => {
  let output = [];

  for (let text of s) {
    let isAlpha = /[a-zA-Z]/i.test(text);
    
    if (output.length === 0) {
      if (isAlpha) {
        output.push(text.toLowerCase());
        output.push(text.toUpperCase());
      } else {
        output.push(text);
      }
    } else {
      if (isAlpha) {
        output = [...attach(output, text.toLowerCase()), ...attach(output, text.toUpperCase())];
      } else {
        output = attach(output, text);
      }
    }
  }
  
  return output;
};
