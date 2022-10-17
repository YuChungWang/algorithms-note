const arr = [3, 20, 8, 5, 1, 12, 17, 2];

// Time complexity: 
// best case: O(nlogn)
// average case: O(nlogn)
// worst case: O(n^2)

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr)); 
