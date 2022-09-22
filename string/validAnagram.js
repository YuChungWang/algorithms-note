// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or
// phrase, typically using all the original letters exactly once.

// ---------------------------------------------------------------------------
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const memoS = new Map();
  const memoT = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!memoS.get(s[i])) {
      memoS.set(s[i], 1);
    } else {
      memoS.set(s[i], memoS.get(s[i]) + 1);
    }

    if (!memoT.get(t[i])) {
      memoT.set(t[i], 1);
    } else {
      memoT.set(t[i], memoT.get(t[i]) + 1);
    }
  }
  
  for (let value of memoS.keys()) {
    if (memoS.get(value) !== memoT.get(value)) {
      return false;
    }
  }

  return true;
};
