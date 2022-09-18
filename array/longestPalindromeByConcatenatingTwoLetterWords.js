// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

// You are given an array of strings words. Each element of words consists of two lowercase English letters.

// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order.
// Each element can be selected at most once.

// Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.

// A palindrome is a string that reads the same forward and backward.

// ---------------------------------------------------------------------------
// Example 1:

// Input: words = ["lc","cl","gg"]
// Output: 6
// Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
// Note that "clgglc" is another longest palindrome that can be created.

// ---------------------------------------------------------------------------
// Example 2:

// Input: words = ["ab","ty","yt","lc","cl","ab"]
// Output: 8
// Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
// Note that "lcyttycl" is another longest palindrome that can be created.

// ---------------------------------------------------------------------------
// Example 3:

// Input: words = ["cc","ll","xx"]
// Output: 2
// Explanation: One longest palindrome is "cc", of length 2.
// Note that "ll" is another longest palindrome that can be created, and so is "xx".

const longestPalindrome = (words) => {
  const map = new Map();
  const palindromeMap = new Map();
  let count = 0;

  for (let word of words) {
    const wordArr = word.split('');
    
    if (map.get(word) > 0) {
      map.set(word, map.get(word) - 1);
      count += 4;
    } else if (
      wordArr[0] === wordArr[1]
    ) {
      if (palindromeMap.get(word) > 0) {
        palindromeMap.set(word, palindromeMap.get(word) - 1);
        count += 4;
      } else {
        palindromeMap.set(word, (palindromeMap.get(word) || 0) + 1); 
      }
    } else {
      const c = wordArr.reverse().join('');
      map.set(c, (map.get(c) || 0) + 1);
    }
  }
  
  if ([...palindromeMap.values()].some((val) => val > 0)) {
    count += 2;
  }
  
  return count;
};
