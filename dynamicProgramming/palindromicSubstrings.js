// https://leetcode.com/problems/palindromic-substrings/description/

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

const countSubstrings = (s) => {
  let count = 0;

  // single
  for (let i = 0; i < s.length; i++) {
    count += 1;

    let left = i - 1;
    let right = i + 1;
    let isPalindromic = true;

    while (isPalindromic && left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        count += 1;
      } else {
        isPalindromic = false
      }

      left -= 1;
      right += 1;
    }
  }

  // double
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      continue;
    }

    count += 1;

    let left = i - 1;
    let right = i + 2;
    let isPalindromic = true;

    while (isPalindromic && left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        count += 1;
      } else {
        isPalindromic = false;
      }

      left -= 1;
      right += 1;
    }
  }

  return count;
};
