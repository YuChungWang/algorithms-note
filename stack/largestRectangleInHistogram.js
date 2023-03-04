// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
// return the area of the largest rectangle in the histogram.

// ---------------------------------------------------------------------------
// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// ---------------------------------------------------------------------------
// Example 2:

// Input: heights = [2,4]
// Output: 4
 
// ---------------------------------------------------------------------------
// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

const largestRectangleArea = (heights) => {
  heights.push(0);
  let stack = [];
  let maxRectangle = 0;
  
  for (let i = 0; i < heights.length; i++) {
    let heightStart = i;

    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [pos, height] = stack.pop();
      maxRectangle = Math.max((i - pos) * height, maxRectangle);
      heightStart = pos;
    }

    stack.push([heightStart, heights[i]]);
  }

  return maxRectangle;
};
