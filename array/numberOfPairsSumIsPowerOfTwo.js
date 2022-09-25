// code signal

// Given an array arr[] consisting of N integers, the task is to count the maximum number of pairs (arr[i], arr[j])
// such that arr[i] + arr[j] is a power of 2.

// ---------------------------------------------------------------------------
// Example 1:

// Input: nums = [1, -1, 2, 3]
// Output: 5
// Explanation:
// (0,0) = 1 + 1 = 2 (which is a power of 2)
// (1,2) = -1 + 2 = 1 (which is a power of 2)
// (1,3) = -1 + 3 = 2 (which is a power of 2)
// (0,3) = 1 + 3 = 4 (which is a power of 2)
// (2,2) = 2 + 2 = 4 (which is a power of 2)
// Therefore, there are 5 pairs of indices whose array values sum is a power of 2 so the output is 5.

// ---------------------------------------------------------------------------
// Example 2:

// Input: nums = [1, 1, 1]
// Output: 6

// timeout O(n^2)
// const solution = (nums) => {
//   nums.sort((a, b) => a - b);
  
//   let left = 0;
//   let count = 0;
  
//   while (left < nums.length) {
//     for (let right = nums.length; right >= left; right--) {
//       const sum = nums[left] + nums[right];
//       if (sum <= 0) {
//         break;
//       } else if (Number.isInteger(Math.log2(sum))) {
//         count += 1;
//       }
//     }
    
//     left += 1;
//   }
  
//   return count;
// };

// O(31 * n)
const solution = (nums) => {
  const map = new Map();
  let output = 0;
 
  for (const num of nums) {
    map.set(num, (map.get(nums) || 0) + 1);
  }

  for (let i = 0; i < 31; i++) {
    const val = 2 ** i;

    for (let j = 0; j < nums.length; j++) {
      let remaining = val - nums[j];

      if (!map.has(remaining)) {
        continue;
      } else {
        output += map.get(remaining);
      }

      if (remaining === nums[j]) {
        output += 1;
      }
    }
  }

  return output / 2;
};

console.log(solution([1, -1, 2, 3]));
