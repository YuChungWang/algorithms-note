// https://leetcode.com/problems/median-of-two-sorted-arrays/

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// ---------------------------------------------------------------------------
// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const findMedianSortedArrays = (nums1, nums2) => {
  if (nums2.length < nums1.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  
  let mid = Math.floor((nums1.length + nums2.length) / 2);
  let left = 0;
  let right = nums1.length;

  while (left <= right) {
    const index1 = Math.floor((left + right) / 2);
    const index2 = mid - index1;
    const l1 = index1 === 0 ? -Infinity : nums1[index1 - 1];
    const l2 = index2 === 0 ? -Infinity : nums2[index2 - 1];
    const r1 = index1 === nums1.length ? Infinity : nums1[index1];
    const r2 = index2 === nums2.length ? Infinity : nums2[index2];

    if (l1 > r2) {
      right = index1 - 1;
    } else if (l2 > r1) {
      left = index1 + 1;
    } else {
      if ((nums1.length + nums2.length) % 2 === 0) {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      } else {
        return Math.min(r1, r2);
      }
    }
  }

  return -1;
};
