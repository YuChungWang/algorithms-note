// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [1,2,3]
// Output: [1,3]
 
// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree will be in the range [0, 10^4].
// -2^31 <= Node.val <= 2^31 - 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let output = []
  if (!root) {
    return output;
  }

  let queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let maxVal = -Infinity;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      maxVal = Math.max(maxVal, node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    output.push(maxVal);
  }

  return output;
};
