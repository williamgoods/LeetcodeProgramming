/**
    给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n == 0 || n == 1){
        return 1
    }

    if (n == 2) {
        return 2
    }

    let dp = new Array()
    dp.push(1)
    dp.push(1)
    dp.push(2)

    for (let i = 3; i <= n; i++) {
        let sum = 0
        for (let j = 0; j < i; j ++) {
            sum += dp[j] * dp[i - 1 - j]
        }

        dp.push(sum)
    }

    return dp[dp.length - 1]
};

export {numTrees}
