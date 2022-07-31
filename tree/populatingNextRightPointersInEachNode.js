// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two
// children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next
// pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer
// to point to its next right node, just like in Figure B. The serialized output is in level order as connected
// by the next pointers, with '#' signifying the end of each level.

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = []
// Output: []

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

const connectDFS = (root) => {
  if (root === null || root.left === null) {
    return root;
  }

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  connect(root.left);
  connect(root.right);

  return root;
};

const connectBFS = (root) => {
  if (root === null) {
    return root;
  }
  let queue = [root];

  while (queue.length) {
    let next = [];

    while (queue.length) {
      const node = queue.shift();
      node.next = queue[0] || null;
      
      if (node.left !== null) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};
