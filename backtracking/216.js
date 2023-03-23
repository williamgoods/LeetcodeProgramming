/** 
    找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

    只使用数字1到9
    每个数字 最多使用一次 
    返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

let result = new Array()
let path = new Array()

var backtracking = (n, k, startIndex) => {
    if (path.length == k) {
        if (path.reduce((sum, a) => sum + a, 0) == n) {
            result.push([...path])
        }
        return
    }

    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
        path.push(i)
        backtracking(n, k, i + 1)
        path.pop()
    }
}

var combinationSum3 = function(n, k) {
    backtracking(n, k, 1)
    return result
}

export {combinationSum3}
