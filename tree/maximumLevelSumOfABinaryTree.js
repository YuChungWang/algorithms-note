// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/

// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
 
// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -10^5 <= Node.val <= 10^5

const maxLevelSum = (root) => {
  let queue = [root];
  let nextLevelQueue = [];
  let levelValues = [];
  let currentLevelSum = 0;
  let max = -Infinity;

  while (queue.length > 0) {
    const node = queue.shift();

    currentLevelSum += node.val;

    if (node.left) {
      nextLevelQueue.push(node.left);
    }
    if (node.right) {
      nextLevelQueue.push(node.right);
    }

    if (queue.length === 0) {
      levelValues.push(currentLevelSum);
      max = Math.max(currentLevelSum, max);
      currentLevelSum = 0;

      if (nextLevelQueue.length > 0) {
        queue = nextLevelQueue;
        nextLevelQueue = [];
      }
    }
  }

  for (let i = 0; i < levelValues.length; i++) {
    if (levelValues[i] === max) {
      return i + 1;
    }
  }
};
