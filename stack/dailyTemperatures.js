// https://leetcode.com/problems/daily-temperatures/

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that
// answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is
// no future day for which this is possible, keep answer[i] == 0 instead.

// ---------------------------------------------------------------------------
// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// ---------------------------------------------------------------------------
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// ---------------------------------------------------------------------------
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// ---------------------------------------------------------------------------
// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

const dailyTemperatures = (temperatures) => {
  const output = Array(temperatures.length).fill(0);
  const stack = []; // [[temp, index]]

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      const [temp, index] = stack.pop();
      output[index] = i - index; 
    }
    stack.push([temperatures[i], i]);
  }

  return output;
};
