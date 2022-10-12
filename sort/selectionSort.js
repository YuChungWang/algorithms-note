const arr = [8, 5, 7, 1, 9, 3];

// Time complexity: O(n^2)
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let currentSmallestIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentSmallestIdx]) {
        currentSmallestIdx = j;
      }
    }

    [arr[i], arr[currentSmallestIdx]] = [arr[currentSmallestIdx], arr[i]];
  }

  return arr;
}

console.log(selectionSort(arr));
