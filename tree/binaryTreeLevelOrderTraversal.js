// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// ---------------------------------------------------------------------------
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [1]
// Output: [[1]]

// ---------------------------------------------------------------------------
// Example 3:

// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const levelOrder = (root) => {
  let queue = [root];
  let ans = [];

  while (queue[0]) {
    let qLen = queue.length;
    let row = [];
    for (let i = 0; i < qLen; i++) {
      const curr = queue.shift();
      row.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    ans.push(row);
  }

  return ans;
};
