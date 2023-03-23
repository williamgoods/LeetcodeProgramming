/**
    给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

    解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = new Array()
let path = new Array()

let backstacking = (startIndex, nums) => {
    if (path.length != 0) {
        result.push([...path])
    }

    for (let i = startIndex; i < nums.length; i++) {
        path.push(nums[i])
        backstacking(i + 1, nums)
        path.pop()
    }
}

var subsets = function(nums) {
    path.length = 0 
    result.length = 0
    backstacking(0, nums)
    result.push([])
    console.log(result)
};

export {subsets}
