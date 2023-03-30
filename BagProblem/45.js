/**
    给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// let backstacking = (nums, startIndex, sum, target) => {
//     if (sum > target) {
//         return false
//     } else if (sum == target) {
//         return true
//     } else {
//         for (let i = startIndex; i < nums.length; i++) {
//             sum += nums[i]
//             if (backstacking(nums, i + 1, sum, target)) {
//                 return true
//             }
//             sum -= nums[i]
//         }
//     }
// 
//     return false
// }
// 
// var canPartition = function(nums) {
//     let sum = nums.reduce((sum, a) => sum += a, 0)
//     console.log("sum / 2 is ", sum / 2)
//     if (sum % 2 == 0) {
//         return backstacking(nums, 0, 0, sum / 2)
//     } else {
//         return false
//     } 
// };
import {testWeightBagProblem2} from './base.js'

let canPartition = (nums) => {
    let sum = nums.reduce((sum, a) => sum + a, 0) 
    if (sum % 2 == 0) {
        let result = testWeightBagProblem2(nums, nums, sum / 2)

        if (result == sum / 2) {
            return true
        }
    }

    return false
}

console.log(canPartition([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97]))
