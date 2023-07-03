// https://leetcode.com/problems/combination-sum-ii/description/

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates
// where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// ---------------------------------------------------------------------------
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// ---------------------------------------------------------------------------
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

const combinationSum2 = (candidates, target) => {
  const output = [];

  candidates.sort((a, b) => a - b);

  const dfs = (subset, idx, sum) => {
    if (sum === target) {
      output.push([...subset]);
      return;
    } if (
      sum > target ||
      idx >= candidates.length
    ) {
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (i !== idx && candidates[i] === candidates[i - 1]) {
        continue;
      }
      const candidate = candidates[i];
      dfs([...subset, candidate], i + 1, sum + candidate);
    }
  };

  dfs([], 0, 0);

  return output;
};
