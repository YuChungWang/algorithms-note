// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// Given a string s, reverse the order of characters in each word within a sentence while still preserving
// whitespace and initial word order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

const reverseWords = (s) => {
  let res = '';
  let word = '';
  for (let c of s) {
    if (c === ' ') {
      res += word + c;
      word = '';
    } else {
      word = c + word;
    }
  }
  return res + word;
};
