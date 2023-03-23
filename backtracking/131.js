/**
    给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

    回文串 是正着读和反着读都一样的字符串。
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
let result = new Array()
let path = new Array()

let backtracking = (s, startIndex) => {
    if (startIndex >= s.length) {
        result.push([...path])
    }

    for (let i = startIndex; i < s.length; i++) {
        if (isPartition(s, startIndex, i)) {
            let str = s.substring(startIndex, i + 1)
            path.push(str) 
        } else {
            continue
        }
        
        backtracking(s, i + 1)
        path.pop()
    }
}

var isPartition = (s, start, end) => {
    for (let i = start, j = end; i < j;i++, j--)  {
        if (s[i] != s[j]) {
            return false 
        } 
    }

    return true
}

var partition = function(s) {
    result.length = 0  
    path.length = 0
    backtracking(s, 0)
    console.log(result)
};

export {partition}
