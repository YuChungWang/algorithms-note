// https://leetcode.com/problems/can-place-flowers/

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers
// cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and
// an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers
// rule.

// ---------------------------------------------------------------------------
// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// ---------------------------------------------------------------------------
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = (flowerbed, n) => {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = i > 0 ? flowerbed[i - 1] : 0;
    const next = i < flowerbed.length - 1 ? flowerbed[i + 1] : 0;

    if (flowerbed[i] === 0 && prev === 0 && next === 0) {
      count += 1;
      i += 1;
    }

    if (count >= n) {
      return true;
    }
  }

  return false;
};
