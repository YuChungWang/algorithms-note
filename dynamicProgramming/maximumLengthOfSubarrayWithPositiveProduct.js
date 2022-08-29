// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/

// Given an array of integers nums, find the maximum length of a subarray where the product of all its
// elements is positive.

// A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

// Return the maximum length of a subarray with positive product.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [1,-2,-3,4]
// Output: 4
// Explanation: The array nums already has a positive product of 24.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [0,1,-2,-3,-4]
// Output: 3
// Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
// Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.

// ---------------------------------------------------------------------------
// Example 3:

// Input: nums = [-1,-2,-3,0,1]
// Output: 2
// Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].

const getMaxLen = (nums) => {
  let maxLen = 0;
  let startNeg = -1;
  let startPos = -1;
  let running = 1;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      startNeg = -1;
      startPos = -1;
      running = 1;
      continue;
    }
    
    running *= nums[i];
    
    if (nums[i] < 0 && startNeg === -1) {
      startNeg = i;
    }
    if (nums[i] > 0 && startPos === -1) {
      startPos = i;
    }
    
    if (running > 0) {
      maxLen = Math.max(
        startPos === -1 ? -Infinity : i - startPos + 1, 
        startNeg === -1 ? -Infinity : i - startNeg + 1,
        maxLen
      )
    } else if (startNeg !== -1) {
      maxLen = Math.max(i - startNeg, maxLen);
    }
  }
  
  return maxLen;
};
