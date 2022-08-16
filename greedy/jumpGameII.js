// https://leetcode.com/problems/jump-game-ii/

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

const jump = (nums) => {
  const minSteps = Array(nums.length).fill(Infinity);
  minSteps[0] = 0;
  let idx = 0;
  
  while (idx < nums.length) {
    for (let i = 0; i <= nums[idx]; i++) {
      minSteps[idx + i] = Math.min(minSteps[idx + i], minSteps[idx] + 1);
    }    
    idx += 1;
  }
  
  return minSteps[nums.length - 1];
};

// Time complexity: O(N)
// Space complexity: O(1)
// const jump = (nums) => {
//   let newMax = 0;
//   let jump = 0;
//   let oldMax = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     newMax = Math.max(newMax, i + nums[i]);
//     if (i === oldMax) {
//       jump++;
//       oldMax = newMax;
//     }
//   }
//   return jump;
// };
