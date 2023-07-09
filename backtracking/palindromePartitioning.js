// https://leetcode.com/problems/palindrome-partitioning/description/

// Given a string s, partition s such that every substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

const partition = (s) => {
  let output = [];

  const checkPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
      if (s[left] === s[right]) {
        left += 1;
        right -= 1;
      } else {
        return false;
      }
    }

    return true;
  };

  const dfs = (s, subset) => {
    if (s.length === 0) {
      output.push([...subset]);
      return;
    }

    for (let i = 1; i <= s.length; i++) {
      const newS = s.slice(0, i);

      if (checkPalindrome(newS)) {
        subset.push(newS);
        dfs(s.slice(i), subset);
        subset.pop();
      }
    }
  };

  dfs(s, []);

  return output;
};
