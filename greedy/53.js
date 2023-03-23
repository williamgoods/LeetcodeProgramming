/**
    给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

    子数组 是数组中的一个连续部分。
*/

var maxSubArray = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }

    let count = 0
    let result = -Number.MAX_VALUE

    for (let i =0; i < nums.length; i++) {
        count = count + nums[i]
        
        if (count > result) {
            result = count
        }

        if (count <= 0) {
            count = 0
        }
    }

    return result
};

export {maxSubArray}
