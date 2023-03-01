// https://leetcode.com/problems/valid-triangle-number/

// Given an integer array nums, return the number of triplets chosen from the array that can make
// triangles if we take them as side lengths of a triangle.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [2,2,3,4]
// Output: 3
// Explanation: Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [4,2,3,4]
// Output: 4

const triangleNumber = (nums) => {
  if (nums.length < 3) {
    return 0;
  }
  const sortedNums = nums.sort((a, b) => a - b);
  let output = 0;
  
  for (let k = nums.length - 1; k >= 2; k--) {
    let i = 0;
    let j = k - 1;
    
    while (i < j) {
      if (sortedNums[i] + sortedNums[j] > sortedNums[k]) {
        output += j - i;
        j -= 1;
      } else {
        i += 1; 
      }
    }
  }
  
  return output;
};
