// code signal

// Given an array of integers a, your task is to count the number of pairs i and j (where 0 ≤ i < j < a.length), such
// that a[i] and a[j] are digit anagrams.

// Two integers are considered to be digit anagrams if they contain the same digits. In other words, one can be obtained
// from the other by rearranging the digits (or trivially, if the numbers are equal). For example, 54275 and 45572 are digit
// anagrams, but 321 and 782 are not (since they don't contain the same digits). 220 and 22 are also not considered as digit
// anagrams, since they don't even have the same number of digits.

// ---------------------------------------------------------------------------
// Example 1:

// For a = [25, 35, 872, 228, 53, 278, 872], the output should be solution(a) = 4.

// There are 4 pairs of digit anagrams:
// * a[1] = 35 and a[4] = 53 (i = 1 and j = 4),
// * a[2] = 872 and a[5] = 278 (i = 2 and j = 5),
// * a[2] = 872 and a[6] = 872 (i = 2 and j = 6),
// * a[5] = 278 and a[6] = 872 (i = 5 and j = 6).

// Constraints:
// 1 ≤ a.length ≤ 105,
// 0 ≤ a[i] ≤ 109.

// timeout
// const solution = (a) => {
//   let mapArr = [...Array(a.length)].map(() => new Map());
//   let count = 0;
  
//   for (let i = 0; i < a.length; i++) {
//     for (let c of String(a[i])) {
//       mapArr[i].set(c, (mapArr[i].get(c) || 0) + 1);
//     }
//   }
  
//   for (let i = 0; i < a.length - 1; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (mapArr[i].size !== mapArr[j].size) {
//         continue;
//       }
      
//       let isValid = true;
//       for (const [key, value] of mapArr[i].entries()) {
//         if (mapArr[j].get(key) !== value) {
//           isValid = false;
//           break;
//         }
//       }
//       if (isValid) {
//         count += 1;
//       }
//     }
//   }
  
//   return count;
// }

const solution = (a) => {
  let res = 0;
  let hm = new Map();

  for(let i of a) {
    let sorted = i.toString().split('').sort().join('');
    
    if(hm.get(sorted)) {
      let count = hm.get(sorted);
      count += 1;
      hm.set(sorted, count);
    } else {
      hm.set(sorted, 1);
    }	
  }

  for(let k of hm.values()) {
    let nCr = k * (k-1) / 2;
    res += nCr;
  }
  return res;
}

console.log(solution([25,35,872,228,53,278,872])) // 4
