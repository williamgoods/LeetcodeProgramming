/**
    给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

    你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

    请你计算并返回达到楼梯顶部的最低花费。
*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0)
    if (cost.length <= 1) {
        return 0
    }

    let dp = new Array()
    dp.push(0)
    dp.push(0)

    for (let i = 2; i < cost.length; i++) {
        dp.push(Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]))
    }

    return dp[dp.length - 1]
};

export {minCostClimbingStairs}
