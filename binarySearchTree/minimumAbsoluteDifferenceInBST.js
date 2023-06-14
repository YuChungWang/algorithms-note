// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different
// nodes in the tree.

// ---------------------------------------------------------------------------
// Example 1:


// Input: root = [4,2,6,1,3]
// Output: 1

// ---------------------------------------------------------------------------
// Example 2:


// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is in the range [2, 104].
// 0 <= Node.val <= 105

const getMinimumDifference = (root) => {
  let min = Infinity;
  let prevNode = null;

  const dfs = (root) => {
      if (!root) {
          return;
      }

      dfs(root.left);
      if (prevNode !== null) {
          min = Math.min(root.val - prevNode, min);
      }
      prevNode = root.val;
      dfs(root.right);
  };

  dfs(root);

  return min;
};
