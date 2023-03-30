/**
    给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
    请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
    假设每一种面额的硬币有无限个。 
    题目数据保证结果符合 32 位带符号整数。
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let n = coins.length

    let dp = new Array(n + 1).fill().map(() => new Array(amount + 1).fill(0))
    dp[0][0] = 1

    for (let i = 1; i <= n; i++) {
        let coin = coins[i - 1]

        for (let j = 0; j <= amount; j++) {
            dp [i][j] = dp[i - 1][j]
            for (let k = 1; j - k * coin >= 0; k++) {
                dp[i][j] += dp[i - 1][j - k * coin]
            }
        }
    }

    return dp[n][amount]
};

console.log(change(10, [1,2,5,9,10,8]))
