// https://leetcode.com/problems/minimum-window-substring/

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that
// every character in t (including duplicates) is included in the window. If there is no such substring, return
// the empty string "".

// The testcases will be generated such that the answer is unique.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// ---------------------------------------------------------------------------
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 
// ---------------------------------------------------------------------------
// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

const minWindow = (s, t) => {
  let map = new Map();

  for (let letter of t) {
      map.set(letter, map.get(letter) + 1 || 1);
  }

  let left = 0;
  let minLeft = null;
  let minRight = null;
  let uniqueChars = map.size; // # of unique characters in t

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);

      if (map.get(s[right]) === 0) {
        uniqueChars -= 1;
      }
    }

    while (uniqueChars === 0 && left <= right) {
      if (minLeft === null || minRight - minLeft > right - left) {
        minLeft = left;
        minRight = right;    
      }
      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1); 

        if (map.get(s[left]) === 1) {
          uniqueChars += 1;
        }
      }
      left += 1;
    }
  }

  return minLeft === null ? "" : s.slice(minLeft, minRight + 1);
};
