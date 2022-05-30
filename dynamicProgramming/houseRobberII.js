// https://leetcode.com/problems/house-robber-ii/

// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed. All houses at this
// place are arranged in a circle. That means the first house is the neighbor
// of the last one. Meanwhile, adjacent houses have a security system connected,
// and it will automatically contact the police if two adjacent houses were broken
// into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
// because they are adjacent houses.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// ---------------------------------------------------------------------------
// Example 3:

// Input: nums = [1,2,3]
// Output: 3

const rob = (nums) => {
  if (nums.length < 3) {
    return Math.max(...nums);
  }

  let cell1 = [...Array(nums.length - 1)].fill(0);
  let cell2 = [...cell1];
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0) {
      cell1[0] = nums[0];
      cell2[0] = nums[1];
    } else if (i === 1) {
      cell1[1] = Math.max(nums[0], nums[1]);
      cell2[1] = Math.max(nums[1], nums[2]);
    } else {
      cell1[i] = Math.max(nums[i] + cell1[i - 2], cell1[i - 1]);
      cell2[i] = Math.max(nums[i + 1] + cell2[i - 2], cell2[i - 1]);
    }
  }
  
  return Math.max(cell1[nums.length - 2], cell2[nums.length - 2]);
};
