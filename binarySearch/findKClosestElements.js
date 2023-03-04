// https://leetcode.com/problems/find-k-closest-elements/

// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
// The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// ---------------------------------------------------------------------------
// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// ---------------------------------------------------------------------------
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

const findClosestElements = (arr, k, x) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    x - arr[mid] > arr[mid + k] - x ? left = mid + 1 : right = mid;
  }
  
  return arr.slice(left, left + k);
};
