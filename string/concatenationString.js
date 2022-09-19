// code signal

// You are given an array of strings arr. Your task is to construct a string from the words in arr, starting with the 0th
// character from each word (in the order they appear in arr), followed by the 1st character, then the 2nd character, etc.
// If one of the words doesn't have an ith character, skip that word.
// Return the resulting string.

// ---------------------------------------------------------------------------
// Example 1:

// For arr = ["Daisy", "Rose", "Hyacinth", "Poppy"], the output should be solution(arr) = "DRHPaoyoisapsecpyiynth".
// * First, we append all 0th characters and obtain string "DRHP";
// * Then we append all 1st characters and obtain string "DRHPaoyo";
// * Then we append all 2nd characters and obtain string "DRHPaoyoisap";
// * Then we append all 3rd characters and obtain string "DRHPaoyoisapsecp";
// * Then we append all 4th characters and obtain string "DRHPaoyoisapsecpyiy";
// * Finally, only letters in the arr[2] are left, so we append the rest characters and get "DRHPaoyoisapsecpyiynth";

const solution = (arr) => {
  const map = new Map();
  let output = '';
  
  for (let word of arr) {
    for (let i = 0; i < word.length; i++) {
      if (!map.get(i)) {
        map.set(i, word[i]);
      } else {
        map.set(i, (map.get(i) || '') + word[i]);
      }
    }
  }
  
  for (let word of map.values()) {
    output += word;
  }
  
  return output;
};
