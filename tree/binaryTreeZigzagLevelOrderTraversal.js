// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then
//   right to left for the next level and alternate between).

// ---------------------------------------------------------------------------
// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: root = [1]
// Output: [[1]]

// ---------------------------------------------------------------------------
// Example 3:

// Input: root = []
// Output: []

// BFS
// const zigzagLevelOrder = (root) => {
//   if (!root) {
//     return [];
//   }

//   let output = [];
//   let currentLevel = 0;
//   let currentLevelValues = [];
//   let queue = [[root, 0]];
//   let tempQueue = [];

//   while (queue.length > 0) {
//     const [node, level] = queue.shift();

//     if (level !== currentLevel) {
//       output.push(currentLevelValues);
//       currentLevelValues = [];
//       tempQueue = [];
//       currentLevel = level;
//     }

//     currentLevelValues.push(node.val);

//     if (level % 2 === 0) {
//       if (node.left) {
//         tempQueue.unshift([node.left, level + 1]);
//       }
//       if (node.right) {
//         tempQueue.unshift([node.right, level + 1]);
//       }
//     } else {
//       if (node.right) {
//         tempQueue.unshift([node.right, level + 1]);
//       }
//       if (node.left) {
//         tempQueue.unshift([node.left, level + 1]);
//       }
//     }

//     if (queue.length === 0 && tempQueue.length > 0) {
//       queue.push(...tempQueue);
//     }
//   }

//   if (currentLevelValues.length > 0) {
//     output.push(currentLevelValues);
//   }

//   return output;
// };

// DFS
const zigzagLevelOrder = (root) => {
  let res = [];
  const traverse = (node, lvl) => {
    if (node === null) {
      return;
    }
    if (!res[lvl]) {
      res[lvl] = [];
    }

    if (lvl % 2 === 0) {
      res[lvl].push(node.val);
    } else {
      res[lvl].unshift(node.val);
    }

    traverse(node.left, lvl + 1);
    traverse(node.right, lvl + 1);
  };

  traverse(root, 0);
  return res;
};
