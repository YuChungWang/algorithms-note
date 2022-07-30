// https://leetcode.com/problems/permutation-in-string/

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// ---------------------------------------------------------------------------
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

const checkInclusion = (s1, s2) => {
  let charMap = new Map();
  for (let s of s1) {
    charMap.set(s, charMap.get(s) + 1 || 1);
  }

  let left = 0;
  let right = 0;
  let requiredLength = s1.length;

  while (right < s2.length) {
    const char = s2[right];
    if (charMap.get(char) > 0) {
      requiredLength -= 1;
    }
    charMap.set(char, charMap.get(char) - 1);
    right += 1;

    if (requiredLength === 0) {
      return true;
    }

    if (right - left === s1.length) {
      if (charMap.get(s2[left]) >= 0) {
        requiredLength += 1;
      }
      charMap.set(s2[left], charMap.get(s2[left]) + 1);
      left += 1;
    }
  }

  return false;
};
