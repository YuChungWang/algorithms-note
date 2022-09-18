// https://leetcode.com/problems/top-k-frequent-elements/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  let map = {};
  let output = [];
  
  // calc num appear count
  // O(n)
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  
  // calc output;
  // O(nlogn)
  const sortedArr = Object.entries(map).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    output.push(sortedArr[i][0]);
  }
  
  return output;
};
