// https://leetcode.com/problems/longest-palindrome/

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest
// palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

const longestPalindrome = (s) => {
  let map = new Map();
  let count = 0;
  
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      if (map.get(c) === 1) {
        count += 1;
        map.set(c, 0);
      } else {
        map.set(c, 1);
      }
    }
  }
  
  const bias = [...map.values()].includes(1) ? 1 : 0;
  
  return count * 2 + bias;
};
