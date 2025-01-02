// https://leetcode.com/problems/count-vowel-strings-in-ranges/

// You are given a 0-indexed array of strings words and a 2D array of integers queries.

// Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

// Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

// Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

// ---------------------------------------------------------------------------
// Example 1:

// Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
// Output: [2,3,0]
// Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
// The answer to the query [0,2] is 2 (strings "aba" and "ece").
// to query [1,4] is 3 (strings "ece", "aa", "e").
// to query [1,1] is 0.
// We return [2,3,0].

// ---------------------------------------------------------------------------
// Example 2:

// Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
// Output: [3,2,1]
// Explanation: Every string satisfies the conditions, so we return [3,2,1].

// ---------------------------------------------------------------------------
// Constraints:

// 1 <= words.length <= 10^5
// 1 <= words[i].length <= 40
// words[i] consists only of lowercase English letters.
// sum(words[i].length) <= 3 * 10^5
// 1 <= queries.length <= 10^5
// 0 <= li <= ri < words.length

const vowelStrings = (words, queries) => {
  const vowel = new Set(['a' ,'e', 'i', 'o', 'u']);
  const memo = Array(words.length).fill(0);

  for (let i = 0; i < words.length; i++) {
    const valid = vowel.has(words[i][0]) && vowel.has(words[i][words[i].length - 1]) ? 1 : 0;
    memo[i + 1] = memo[i] + valid;
  }

  const output = queries.map(([start, end]) => {
    return memo[end + 1] - memo[start];
  })

  return output;
};

console.log(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]])); // [2, 3, 0]
console.log(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]])); // [3, 2, 1]
