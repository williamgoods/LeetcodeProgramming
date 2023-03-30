/**
    给你一个整数数组 nums 和一个整数 target 。

    向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

    例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
    返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a + b)

    if (Math.abs(target) > sum) {
        return 0
    }

    if ((sum + target) % 2 == 1) {
        return 0
    }

    let bigSize = (sum + target) / 2

    let dp = new Array(bigSize + 1).fill(0)

    dp[0] = 1

    for (let i = 0; i < nums.length; i++) {
        for (let j = bigSize; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]] 
        }
    }

    return dp[bigSize]
};

console.log(findTargetSumWays([34,21,12,36,16,7,31,7,41,49,7,48,22,19,32,46,19,18,44,34], 47))
