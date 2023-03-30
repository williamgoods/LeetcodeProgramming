/**
    你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

    给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length
    let dp = new Array(n + 1).fill().map(() => new Array(2).fill((0)))

    for (let i = 1; i <= n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0])
        dp[i][1] = dp[i - 1][0] + nums[i - 1]
    }

    return Math.max(dp[n][1], dp[n][0])
};

console.log(rob([1,2,3,1]))
