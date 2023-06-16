// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored
// in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another
// computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization
// algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized
// to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to
// follow this format, so please be creative and come up with different approaches yourself.

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = []
// Output: []
 
// ---------------------------------------------------------------------------
// Constraints:

// The number of nodes in the tree is in the range [0, 10^4].
// -1000 <= Node.val <= 1000


// BFS
const serializeBFS = (root) => {
  let queue = [root];
  let data = [];

  if (root === null) {
    return [];
  }

  while (queue.length > 0) {
    const root = queue.shift();

    const value = root ? root.val : null;
    data.push(value);

    if (root) {
      queue.push(root.left);
      queue.push(root.right);
    }
  }

  return data;
};

const deserializeBFS = (data) => {
  if (data.length === 0) {
      return null;
  }
  const rootValue = data.shift();
  const node = new TreeNode(rootValue);
  const queue = [node];

  while (queue.length > 0) {
    let node = queue.shift();

    const nodeLeftValue = data.shift();
    const nodeRightValue = data.shift();

    node.left = nodeLeftValue === null ? null : new TreeNode(nodeLeftValue);
    node.right = nodeRightValue === null ? null : new TreeNode(nodeRightValue);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return node;
};

// DFS
const serializeDFS = (root) => {
  let data = [];

  const preorderTravesal = (root) => {
    if (root === null) {
      data.push(null);
      return;
    }

    data.push(root.val);
    preorderTravesal(root.left);
    preorderTravesal(root.right);
  }

  preorderTravesal(root);

  return data;
};

const deserializeDFS = (data) => {
  const constructTree = () => {
    if (data.length === 0) {
      return;
    }

    const value = data.shift();
    if (value == null) {
      return null;
    }

    const node = new TreeNode(value);
    node.left = constructTree();
    node.right = constructTree();

    return node;
  };

  return constructTree();
};
