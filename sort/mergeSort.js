const arr = [3, 20, 8, 5, 1, 12, 17, 2];

// Time complexity: 
// best case: O(nlogn)
// average case: O(nlogn)
// worst case: O(nlogn)

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const sortBeforeMerge = (arr1, arr2) => {
    let sortedArr = [];
    while (arr1.length && arr2.length) {
      const num = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
      sortedArr.push(num);
    }

    sortedArr = arr1.length > 0 ? [...sortedArr, ...arr1] : [...sortedArr, ...arr2];
    return sortedArr;
  }

  let middleIdx = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIdx);
  let secondHalf = arr.slice(middleIdx);

  return sortBeforeMerge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort(arr));
