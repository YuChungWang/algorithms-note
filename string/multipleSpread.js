// 2(A)2(C3(B))
// AACBBBCBBB

const multipleSpread = (s) => {
  let stack = [];

  for (let c of s) {
    if (c === ')') {
      let num = '';
      let output = '';
      let close = false;

      while (stack.length > 0) {
        const node = stack.pop();
        if (/[a-zA-Z]/.test(node)) {
          if (!close) {
            output = node + output;
          } else {
            stack.push(node);
            break;
          }
        } else if (/[\d]/.test(node)) {
          close = true;
          num = node + num;
        }
      }
      
      stack.push(output.repeat(Number(num)));
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};

console.warn(multipleSpread('2(A)2(C3(B))'));
