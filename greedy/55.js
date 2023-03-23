/**
    给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
    数组中的每个元素代表你在该位置可以跳跃的最大长度。
    判断你是否能够到达最后一个下标。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let Directory = new Map()

let backstacking = (nums, startIndex) => {
    if (startIndex >= nums.length - 1) {
        return true
    }

    if (Directory.has(startIndex)) {
        return Directory.get(startIndex)
    }

    let range = nums[startIndex]
    if (range == 0) {
        Directory.set(startIndex, false)
        return false
    }

    for (let i = 1; i < range + 1; i++) {
        let result = backstacking(nums, startIndex + i) 
        if (result) {
            return result
        }
        Directory.set(startIndex, result)
    }

    return false
}

var canJump = function(nums) {
    return backstacking(nums, 0)
};

export {canJump}
