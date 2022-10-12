const arr = [8, 5, 7, 1, 9, 3];

// Time complexity: O(n^2)
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log(insertionSort(arr));
