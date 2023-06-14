// https://leetcode.com/problems/binary-tree-preorder-traversal/

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,2,3]

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = []
// Output: []

// ---------------------------------------------------------------------------
// Example 3:

// Input: root = [1]
// Output: [1]

// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

const preorderTraversal = (root) => {
  let output = [];

  const dfs = (root) => {
    if (!root) {
      return;
    }

    output.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return output;
};