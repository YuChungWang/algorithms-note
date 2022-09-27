// https://leetcode.com/problems/best-sightseeing-pair/

// You are given an integer array values where values[i] represents the value of the ith sightseeing spot.
// Two sightseeing spots i and j have a distance j - i between them.

// The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values
// of the sightseeing spots, minus the distance between them.

// Return the maximum score of a pair of sightseeing spots.

// ---------------------------------------------------------------------------
// Example 1:

// Input: values = [8,1,5,2,6]
// Output: 11
// Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11

// ---------------------------------------------------------------------------
// Example 2:

// Input: values = [1,2]
// Output: 2

const maxScoreSightseeingPair = (values) => {
  let prevMax = values[0];
  let max = 0;
  
  for (let i = 1; i < values.length; i++) {
    prevMax -= 1;
    max = Math.max(prevMax + values[i], max);
    prevMax = Math.max(values[i], prevMax);
  }
  
  return max;
};