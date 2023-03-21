// https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// ---------------------------------------------------------------------------
// Example 3:

// Input: root = []
// Output: true

// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

const isBalanced = (root) => {
  const checkHeightBalanced = (root) => {
    if (!root) {
      return [true, 0];
    }
    const [left, right] = [checkHeightBalanced(root.left), checkHeightBalanced(root.right)];
    const isHeightBalance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [isHeightBalance, Math.max(left[1], right[1]) + 1];
  }

  return checkHeightBalanced(root)[0];
};
