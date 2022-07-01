// https://leetcode.com/problems/longest-repeating-character-replacement/

// You are given a string s and an integer k. You can choose any character of the string
// and change it to any other uppercase English character. You can perform this operation
// at most k times.

// Return the length of the longest substring containing the same letter you can get after
// performing the above operations.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

const characterReplacement = (s, k) => {
  let memo = new Map();
  let left = 0;
  let count = 1;
  let longestCount = 1;

  for (let right = 0; right < s.length; right++) {
    if (!memo.get(s[right])) {
      memo.set(s[right], 0);
    }
    memo.set(s[right], memo.get(s[right]) + 1);

    count = right - left + 1;
    if (count - Math.max(...memo.values()) <= k) {
      longestCount = Math.max(count, longestCount);
    } else {
      memo.set(s[left], memo.get(s[left]) - 1);
      left +=1;
    }
  }

  return longestCount;
};
