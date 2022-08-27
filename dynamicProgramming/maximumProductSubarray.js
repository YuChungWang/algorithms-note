// https://leetcode.com/problems/maximum-product-subarray/

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the
// largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

const maxProduct = (nums) => {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(prevMax * nums[i], nums[i], prevMin * nums[i]);
    currMin = Math.min(prevMin * nums[i], nums[i], prevMax * nums[i]);
    
    prevMax = currMax;
    prevMin = currMin;
    
    max = Math.max(currMax, max);
  }
  
  return max;
};
