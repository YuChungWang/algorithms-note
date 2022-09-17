// code signal

// Given an array of integers a, your task is to calculate the digits that occur the most number of times in the array.
// Return the array of these digits in ascending order.

// ---------------------------------------------------------------------------
// Example 1:

// For a = [25, 2, 3, 57, 38, 41], the output should be solution(a) = [2, 3, 5].
// Here are the number of times each digit appears in the array:
// 0 -> 0
// 1 -> 1
// 2 -> 2
// 3 -> 2
// 4 -> 1
// 5 -> 2
// 6 -> 0
// 7 -> 1
// 8 -> 1
// The most number of times any number occurs in the array is 2, and the digits which appear 2 times are 2, 3 and 5.
// So the answer is [2, 3, 5].

// * [execution time limit] 4 seconds (js)

// * [input] array.integer a
// An array of positive integers.
// Guaranteed constraints:
// 1 ≤ a.length ≤ 10^3,
// 1 ≤ a[i] < 100.

// [output] array.integer
// The array of most frequently occurring digits, sorted in ascending order.

const solution = (a) => {
  let maxCount = 0;
  let map = new Map();
  let output = [];
  
  for (let item of a) {
    const numArr = String(item).split('');
    for (let num of numArr) {
      map.set(num, (map.get(num) || 0) + 1);
      maxCount = Math.max(map.get(num), maxCount);
    }
  }
  
  for (let i = 0; i <= 9; i++) {
    if (map.get(String(i)) === maxCount) {
      output.push(i);
    }
  }
  
  return output;
}
