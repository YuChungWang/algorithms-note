// https://leetcode.com/problems/binary-tree-right-side-view/description/

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of
// the nodes you can see ordered from top to bottom.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]

// ---------------------------------------------------------------------------
// Example 3:

// Input: root = []
// Output: []
 
// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const rightSideView = (root) => {
  if (!root) {
    return [];
  }
  let output = [];
  let queue = [root];
  let nextLevelQueue = [];
  let rightestInThisLevel = null;

  while (queue.length > 0) {
    const node = queue.shift();

    if (node && typeof node.val === 'number') {
      rightestInThisLevel = node.val;
    }

    if (node && node.left) {
      nextLevelQueue.push(node.left);
    }
    if (node && node.right) {
      nextLevelQueue.push(node.right);
    }

    if (queue.length === 0) {
      if (rightestInThisLevel !== null) {
        output.push(rightestInThisLevel);
        rightestInThisLevel = null;
      }

      if (nextLevelQueue.length > 0) {
        queue = nextLevelQueue;
        nextLevelQueue = [];
      }
    }
  }

  return output;
};
