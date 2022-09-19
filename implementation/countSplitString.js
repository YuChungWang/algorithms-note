// code signal

// You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c
// (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings.
// NOTE: + refers to string concatenation.

// ---------------------------------------------------------------------------
// Example 1:

// For s = "xzxzx", the output should be solution(s) = 5.
// Consider all the ways to split s into three non-empty parts:
// * If a = "x", b = "z" and c = "xzx", then all a + b = "xz", b + c = "zxzx" and c + a = xzxx are different.
// * If a = "x", b = "zx" and c = "zx", then all a + b = "xzx", b + c = "zxzx" and c + a = zxx are different.
// * If a = "x", b = "zxz" and c = "x", then all a + b = "xzxz", b + c = "zxzx" and c + a = xx are different.
// * If a = "xz", b = "x" and c = "zx", then a + b = b + c = "xzx". Hence, this split is not counted.
// * If a = "xz", b = "xz" and c = "x", then all a + b = "xzxz", b + c = "xzx" and c + a = xxz are different.
// * If a = "xzx", b = "z" and c = "x", then all a + b = "xzxz", b + c = "zx" and c + a = xxzx are different.
// Since there are five valid ways to split s, the answer is 5.

const solution = (s) => {
  let left = 1;
  let count = 0;
  
  while (left < s.length - 1) {
    for (let right = left + 1; right < s.length; right++) {
      const a = s.slice(0, left);
      const b = s.slice(left, right);
      const c = s.slice(right, s.length);
      
      if (
        a + b !== b + c &&
        a + b !== c + a &&
        b + c !== c + a
      ) {
        count += 1;
      }
    }
    
    left += 1;
  }
  
  return count;
};
