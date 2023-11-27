// https://leetcode.com/problems/longest-palindromic-substring/

// Given a string s, return the longest palindromic substring in s.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// ---------------------------------------------------------------------------
// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

const longestPalindrome = (s) => {
  const dp = Array(s.length).fill('').map(() => Array(s.length).fill(false));
  let ans = [0, 0];

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;

    if (i < s.length - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
    }
  }

  for (let diff = 2; diff < s.length; diff++) {
    for (let i = 0; i < s.length - diff; i++) {
      let j = i + diff;

      if (s[i] == s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans = [i, j];
      }
    }
  }

  const [i, j] = ans;
  return s.slice(i, j + 1);
};
