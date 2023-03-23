/**
    给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

    candidates 中的每个数字在每个组合中只能使用 一次 。

    注意：解集不能包含重复的组合。 
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let result = new Array()
let path = new Array()

var backtracking = (candidates, target, startIndex, sum, used) => {
    if (sum > target) {
        return
    } else if (sum == target){
        result.push([...path])
        return
    } else {
        for (let i = startIndex; i < candidates.length; i++) {
            
            if (i > 0 && candidates[i] == candidates[i - 1] && used[i - 1] == 0) {
                continue
            }

            path.push(candidates[i])
            sum += candidates[i]
            used[i] = true
            backtracking(candidates, target, i + 1, sum, used)
            used[i] = false
            sum -= candidates[i] 
            path.pop()
        }
    }
}

var combinationSum2 = function(candidates, target) {
    result.length = 0
    path.length = 0

    candidates.sort((a, b) => a - b)

    let used = new Array(candidates.length).fill(false) 
    backtracking(candidates, target, 0, 0, used)
    console.log(result)
};

export {combinationSum2}
