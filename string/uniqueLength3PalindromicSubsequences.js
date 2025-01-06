// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.
// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.
// A palindrome is a string that reads the same forwards and backwards.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "aabca"
// Output: 3
// Explanation: The 3 palindromic subsequences of length 3 are:
// - "aba" (subsequence of "aabca")
// - "aaa" (subsequence of "aabca")
// - "aca" (subsequence of "aabca")

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "adc"
// Output: 0
// Explanation: There are no palindromic subsequences of length 3 in "adc".

// ---------------------------------------------------------------------------
// Example 3:

// Input: s = "bbcbaba"
// Output: 4
// Explanation: The 4 palindromic subsequences of length 3 are:
// - "bbb" (subsequence of "bbcbaba")
// - "bcb" (subsequence of "bbcbaba")
// - "bab" (subsequence of "bbcbaba")
// - "aba" (subsequence of "bbcbaba")

// ---------------------------------------------------------------------------
// Constraints:

// 3 <= s.length <= 10^5
// s consists of only lowercase English letters.

// const countPalindromicSubsequence = (s) => {
//   const combinations = new Set();

//   const dfs = (idx, combination = '') => {
//     if (combination.length > 3) {
//       return;
//     }
//     if (idx === s.length) {
//       if (combination.length === 3) {
//         combinations.add(combination);
//       }
//       return;
//     }

//     dfs(idx + 1, combination);
//     dfs(idx + 1, `${combination}${s[idx]}`);
//   }

//   dfs(0);

//   const validPalindromic = (word) => {
//     let left = 0;
//     let right = word.length - 1;

//     while (left < right) {
//       if (word[left] !== word[right]) {
//         return false;
//       }

//       left += 1;
//       right -= 1;
//     }

//     return word[0] === word[2];
//   }

//   let validCount = 0;
//   for (const word of combinations) {
//     if (validPalindromic(word)) {
//       validCount += 1;
//     }
//   }

//   return validCount;
// };

const countPalindromicSubsequence = (s) => {
  let count = 0;

  for (let i = 0; i < 26; i++) {
    let currentChar = String.fromCharCode(i + 97);
    let left = s.indexOf(currentChar);
    let right = s.lastIndexOf(currentChar);


    if (left !== -1 && right !== -1 && left < right) {
      count += new Set(s.substring(left + 1, right)).size;
    }
  }
  return count;
}

console.log(countPalindromicSubsequence('aabca')) // 3
console.log(countPalindromicSubsequence('adc')) // 0
console.log(countPalindromicSubsequence('bbcbaba')) // 4
console.log(countPalindromicSubsequence('tlpjzdmtwderpkpmgoyrcxttiheassztncqvnfjeyxxp')) // 161
console.log(countPalindromicSubsequence('nhzosdwmwomlebymvkbqbdohzdtpufnllwzhqptyffreebalphgsslryuqryloqxvbehtohdrsynmcbligczvoyzrhbtmqxepqmcjirwishyvoliizknzrokejtqtfoylsdzpgeooczxldvmsnhvzgojxnwwhukynvhhpzmdoiooliesogubtsvkrvzmanpwwlnlskremzisqwwwjistwabqxztlcqwlsxbuhjdnouecwqgxdlggauxrelipqlgvfkmgoozhzrhortbpmxhupjqqrsrvqxqilptchtedoznxvgvmuticzdzwszzujuanlrrpvycgawoxfbvxhkdyhmcxdlrtyktekcmkyajlywcrozjkedwlrqpaugdobtffwidxawddgeraaugiebtntmuncnybuwnlzbmkrmxbcpbhqoiznlpcswqtsflfilkclrjdxbvcctvopoidjrtwszpjpfrfcvjtouvzvpqayvgesiiawokdqatfkijsuocbeqrhrmlhtclhrmrbkpahfdgiatejsnvubwbaxwooskcaiuqvxcvgpnkiiiencnxjsvvgdfptreumttlyoqqwqdblhhbnilbvbwwpnmouxlvqimdbcxisnegllnejhkipuqbcrhsrxwipdjzskpyijuvrvtrnqljjefymfdcvcuvwaitdjevuvelkrglhtlnivmvjyzmhjnzvudgqwocvwhthxdlyfljabngzjayvqudhvsdslacgvosnchhbkulcxpangdlpgkrczbnnzokmqzgauitqutiboveumsqvbulhbfbynzogtejuwi')); // 676
 