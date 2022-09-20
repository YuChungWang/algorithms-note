// https://leetcode.com/problems/koko-eating-bananas/

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come
// back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that
// pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// ---------------------------------------------------------------------------
// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4

// ---------------------------------------------------------------------------
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// ---------------------------------------------------------------------------
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

const minEatingSpeed = (piles, h) => {
  let max = Math.max(...piles);
  if (piles.length === h) {
    return max;
  }
  
  let output = max;
  let left = 1;
  let right = max;
  
  while (left <= right) {
    let speed = Math.ceil((left + right) / 2);
    let hr = 0;
    
    for (let i = 0; i < piles.length; i++) {
      hr += Math.ceil(piles[i] / speed);
    }
    
    if (hr > h) {
      left = speed + 1;
      output = Math.max(speed, output);
    } else {
      right = speed - 1;
      output = Math.min(speed, output);
    }
  }
  
  return output;
};
