// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// ---------------------------------------------------------------------------
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let longestCount = 0;
  let charSet = new Set();
  
  for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
          charSet.delete(s[left]);
          left += 1;
      }
      charSet.add(s[right]);
      longestCount = Math.max(longestCount, right - left + 1);
  }

  return longestCount;
};
