// https://leetcode.com/problems/subsets-ii/description/

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

const subsetsWithDup = (nums) => {
  const output = [];

  const dfs = (i, subset) => {
    if (i === nums.length) {
      output.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    dfs(i + 1, subset);
    subset.pop();

    while (
      i + 1 < nums.length &&
      nums[i] === nums[i + 1]
    ) {
      i += 1;
    }

    dfs(i + 1, subset);
  };

  dfs(0, []);

  return output;
};

console.log(subsetsWithDup([1, 2, 2]));
