// https://leetcode.com/problems/flood-fill/

// An image is represented by an m x n integer grid image where image[i][j] represents the pixel
// value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image
// starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to
// the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally
// to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned
// pixels with color.

// Return the modified image after performing the flood fill.

// ---------------------------------------------------------------------------
// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels
// connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.

// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// ---------------------------------------------------------------------------
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

// DFS
const floodFillDFS = (image, sr, sc, color) => {
  const currColor = image[sr][sc];

  const dfs = (row, col) => {
    if (
      row >= image.length ||
      row < 0 ||
      col >= image[0].length ||
      col < 0 ||
      image[row][col] === color ||
      image[row][col] !== currColor
    ) {
      return;
    }

    image[row][col] = color;
    dfs(row - 1, col);  // up
    dfs(row + 1, col);  // down
    dfs(row, col + 1);  // right 
    dfs(row, col - 1);  // left
  }

  dfs(sr, sc);

  return image;
};

// BFS
const floodFillBFS = (image, sr, sc, color) => {
  const currColor = image[sr][sc];
  if (currColor === color) {
    return image;
  }
  let queue = [[sr, sc]];

  while (queue.length) {
    const [row, col] = queue.shift();
    if (image[row][col] === currColor) {
      image[row][col] = color;

      if (row > 0) {
        queue.push([row - 1, col]); // up
      }
      if (row < image.length - 1) {
        queue.push([row + 1, col]); // down
      }
      if (col < image[0].length - 1) {
        queue.push([row, col + 1]); // right
      }
      if (col > 0) {
        queue.push([row, col - 1]); // left
      }
    }
  }

  return image;
}
