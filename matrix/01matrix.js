// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// ---------------------------------------------------------------------------
// Example 1:

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// ---------------------------------------------------------------------------
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

const updateMatrix = (mat) => {
  let queue = [];

  for (let col = 0; col < mat.length; col++) {
    for (let row = 0; row < mat[0].length; row++) {
      if (mat[col][row] === 0) {
        queue.push([col, row, 0]);
      } else {
        mat[col][row] = Infinity;
      }
    }
  }

  const dir = [[1, 0], [0, -1], [-1, 0], [0, 1]];

  while (queue.length) {
    let pos = queue.shift();
    if (mat[pos[0]][pos[1]] > pos[2]) {
      mat[pos[0]][pos[1]] = pos[2];
    }

    dir.forEach((d) => {
      let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];

      if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
        if (mat[next[0]][next[1]] === Infinity) {
          queue.push(next);
        }
      }
    });
  }
  
  return mat;
};
