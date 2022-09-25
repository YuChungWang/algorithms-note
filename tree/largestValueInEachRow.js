// code signal

// You have a binary tree t. Your task is to find the largest value in each row of this tree. In a tree, a row
// is a set of nodes that have equal depth. For example, a row with depth 0 is a tree root, a row with depth 1
// is composed of the root's children, etc.

// Return an array in which the first element is the largest value in the row with depth 0, the second element is
// the largest value in the row with depth 1, the third element is the largest element in the row with depth 2, etc.

// ---------------------------------------------------------------------------
// Example 1:

// For
// t = {
//   "value": -1,
//   "left": {
//     "value": 5,
//     "left": null,
//     "right": null
//   },
//   "right": {
//     "value": 7,
//     "left": null,
//     "right": {
//       "value": 1,
//       "left": null,
//       "right": null
//     }
//   }
// }
// the output should be solution(t) = [-1, 7, 1].

// The tree in the example looks like this:

//     -1
//    / \
//   5   7
//        \
//         1
// In the row with depth 0, there is only one vertex - the root with value -1;
// In the row with depth 1, there are two vertices with values 5 and 7, so the largest value here is 7;
// In the row with depth 2, there is only one vertex with value 1.

// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

const solution = (t) => {
  if (!t) {
    return [];
  }
  let output = [];
  let queue = [[t, 0]];
  
  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    output[depth] = Math.max((output[depth] || -Infinity), node.value);
    
    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }
  
  return output;
};
