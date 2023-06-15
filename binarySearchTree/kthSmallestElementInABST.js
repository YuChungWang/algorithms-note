// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed)
// of all the values of the nodes in the tree.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
 
// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 10^4
// 0 <= Node.val <= 10^4

// Approach 1: Recursive Inorder Traversal
const kthSmallestRecursive = (root, k) => {
  const arr = [];

  const inorderTraversal = (root) => {
    if (!root) {
      return;
    }

    inorderTraversal(root.left);
    arr.push(root.val);
    inorderTraversal(root.right)
  }

  inorderTraversal(root);

  return arr[k - 1];
};
// Time complexity : O(N) to build a traversal.
// Space complexity : O(N) to keep an inorder traversal.


// Approach 2: Iterative Inorder Traversal
const kthSmallestIterative = (root, k) => {
  const stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    k -= 1;

    if (k <= 0) {
      return root.val;
    }

    root = root.right;
  }
};
// Time complexity: O(H + k), where H is a tree height.
// This complexity is defined by the stack, which contains at least H + k elements, since before
// starting to pop out one has to go down to a leaf. This results in O(log⁡N + k) for the balanced tree and
// O(N + k) for completely unbalanced tree with all the nodes in the left subtree.

// Space complexity: O(H) to keep the stack,
// where H is a tree height. That makes
// O(N) in the worst case of the skewed tree,
// and O(log⁡N) in the average case of the balanced tree.