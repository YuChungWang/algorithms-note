// code signal

// Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j],
// where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

// ---------------------------------------------------------------------------
// Example 1:

// * For a = [10, 2], the output should be solution(a) = 1344.
// * a[0] ∘ a[0] = 10 ∘ 10 = 1010,
// * a[0] ∘ a[1] = 10 ∘ 2 = 102,
// * a[1] ∘ a[0] = 2 ∘ 10 = 210,
// * a[1] ∘ a[1] = 2 ∘ 2 = 22.
// * So the sum is equal to 1010 + 102 + 210 + 22 = 1344.

// ---------------------------------------------------------------------------
// Example 2:
// * For a = [8], the output should be solution(a) = 88. There is only one number in a, and a[0] ∘ a[0] = 8 ∘ 8 = 88,
// so the answer is 88.

// ---------------------------------------------------------------------------
// Example 3:
// * For a = [1, 2, 3], the output should be solution(a) = 198.
// * a[0] ∘ a[0] = 1 ∘ 1 = 11,
// * a[0] ∘ a[1] = 1 ∘ 2 = 12,
// * a[0] ∘ a[2] = 1 ∘ 3 = 13,
// * a[1] ∘ a[0] = 2 ∘ 1 = 21,
// * a[1] ∘ a[1] = 2 ∘ 2 = 22,
// * a[1] ∘ a[2] = 2 ∘ 3 = 23,
// * a[2] ∘ a[0] = 3 ∘ 1 = 31,
// * a[2] ∘ a[1] = 3 ∘ 2 = 32,
// * a[2] ∘ a[2] = 3 ∘ 3 = 33.
// * The total result is 11 + 12 + 13 + 21 + 22 + 23 + 31 + 32 + 33 = 198.

// [input] array.integer a
// 1 ≤ a.length ≤ 10^5,
// 1 ≤ a[i] ≤ 10^6.

const solution = (a) => {
  let offsets = [0, 0, 0, 0, 0, 0, 0, 0];
  let sum = 0;
  
  // calc offsets
  for (let i = 0; i < a.length; i++) {
    const digit = String(a[i]).split('').length;
    offsets[digit] += 1;
  }
  
  // sum
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * a.length;
    
    for (let j = 0; j < offsets.length; j++) {
      sum += a[i] * (10 ** j) * offsets[j];
    }
  }
  
  return sum;
};
