// code signal

// You need to climb a staircase that has n steps, and you decide to get some extra exercise by jumping up the
// steps. You can cover at most k steps in a single jump. Return all the possible sequences of jumps that you
// could take to climb the staircase, sorted.

// ---------------------------------------------------------------------------
// Example 1:

// For n = 4 and k = 2, the output should be

// solution(n, k) =
// [[1, 1, 1, 1],
//  [1, 1, 2],
//  [1, 2, 1],
//  [2, 1, 1],
//  [2, 2]]
// There are 4 steps in the staircase, and you can jump up 2 or fewer steps at a time. There are 5 potential
// sequences in which you jump up the stairs either 2 or 1 at a time.

const solution = (n, k) => {
  let output = [];
  
  const dfs = (target, steps, currentStep, path = []) => {
    if (currentStep === target) {
      output.push([...path]);
      return;
    }

    for (let i = 1; i <= steps; i++) {
      if (currentStep + i > target) {
        break;
      }
      path.push(i);
      dfs(target, steps, currentStep + i, path);
      path.pop();
    }
  };
  
  dfs(n, k, 0);
  
  return output;
};
