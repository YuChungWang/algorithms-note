// https://leetcode.com/problems/permutations/

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// ---------------------------------------------------------------------------
// Example 3:

// Input: nums = [1]
// Output: [[1]]

const permute = (nums) => {
  let output = [];
  dfs(nums, [], Array(nums.length).fill(false), output);
  return output;
};

const dfs = (nums, path, used, output) => {
  if (path.length === nums.length) {
    output.push([...path]);
    return;
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used, output);
    path.pop();
    used[i] = false;
  }
};
