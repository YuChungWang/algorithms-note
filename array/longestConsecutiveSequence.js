// https://leetcode.com/problems/longest-consecutive-sequence/

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

const longestConsecutive = (nums) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  const sortedNums = nums.sort((a, b) => a - b);
  let count = 1;
  let maxCount = 1;
  
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      count += 1;
    } else if (sortedNums[i] !== sortedNums[i - 1]) {
      count = 1;
    }
    
    maxCount = Math.max(maxCount, count);
  }
  
  return maxCount;
};
