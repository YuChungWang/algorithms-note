// https://leetcode.com/problems/coin-change/

// You are given an integer array coins representing coins of different denominations and an integer amount representing
// a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by
// any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// ---------------------------------------------------------------------------
// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// ---------------------------------------------------------------------------
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// ---------------------------------------------------------------------------
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let money = 1; money <= amount; money++) {
    for (let coin of coins) {
      const remaining = money - coin;
      
      if (remaining >= 0) {
        dp[money] = Math.min(dp[remaining] + 1, dp[money]);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
};
