/**
    给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

    每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

    0 <= j <= nums[i] 
    i + j < n
    返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length == 0) {
        return 0
    }

    if (nums[0] >= nums.length - 1) {
        return 1
    }
    
    let CurrentRangeEnd = nums[0]
    let CurrentMostEnd = nums[0]

    let result = 1

    for (let i = 1; i < nums.length; i++) {
        let end = i + nums[i]
        console.log("end is ", end)
        console.log("CurrentMostEnd: ", CurrentMostEnd)
        
        if (i <= CurrentRangeEnd) {
            console.log("CurrentRangeEnd: ", CurrentRangeEnd)
            if (end > CurrentMostEnd) {
                CurrentMostEnd = end
            }
        } else {
            result += 1
            i = CurrentRangeEnd
            CurrentRangeEnd = CurrentMostEnd
        }

        if ((CurrentMostEnd >= nums.length - 1) || (end >= nums.length - 1)){
            result += 1
            return result
        }
    }

    return result
};

export {jump}
