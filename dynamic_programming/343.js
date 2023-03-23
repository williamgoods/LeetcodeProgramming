/**
给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n == 2) {
        return 1
    }

    let dp = new Array(n)

    dp[0] = 1
    dp[1] = 2

    for (let i = 2; i < n; i++) {
        let max = -Number.MAX_VALUE
        for (let j = 0; j < i; j++) {
            let localmax = Math.max(dp[j] * (i - j), (j + 2) * (i - j))
            if (localmax > max) {
                max = localmax
            } 
        }
        dp[i] = max
    }

    return dp[dp.length - 2]
};

export {integerBreak}
