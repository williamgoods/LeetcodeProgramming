/**
    这是 LeetCode 上的 474. 一和零 ，难度为 中等。

    给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

    请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

    如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
*/

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

let version01 = (strs, m, n) => {
    let len = strs.length
    let cnt = new Array(len).fill().map(() => new Array(2)) 

    for (let i = 0; i < len; i++) {
        let zero = 0 
        let one = 0

        for (let c of strs[i]) {
            if (c == '0') {
                zero++
            } else {
                one++ 
            }
            cnt[i][0] = zero
            cnt[i][1] = one
        } 
    }

    let dp = new Array(len).fill().map(() => new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)))

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            dp[0][i][j] = (i >= cnt[0][0] && j >= cnt[0][1]) ? 1 : 0
        }
    }

    for (let k = 1; k < len; k++) {
        let zero = cnt[k][0]
        let one = cnt[k][1]
        
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                let a = dp[k - 1][i][j]  
                let b = (i - zero >= 0 && j - one >= 0) ? dp[k - 1][i - zero][j - one] + 1 : 0
                dp[k][i][j] = Math.max(a, b)
            }
        }
    }
    console.log(dp)

    return dp[len - 1][m][n]
}


let version02 = (strs, m, n) => {
    let len = strs.length
    let cnt = new Array(len).fill().map(() => new Array(2)) 

    for (let i = 0; i < len; i++) {
        let zero = 0 
        let one = 0

        for (let c of strs[i]) {
            if (c == '0') {
                zero++
            } else {
                one++ 
            }
            cnt[i][0] = zero
            cnt[i][1] = one
        } 
    }

    let dp = new Array(2).fill().map(() => new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)))

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            dp[0][i][j] = (i >= cnt[0][0] && j >= cnt[0][1]) ? 1 : 0
        }
    }

    for (let k = 1; k < len; k++) {
        let zero = cnt[k][0]
        let one = cnt[k][1]
        
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                let a = dp[(k - 1) & 1][i][j]  
                let b = (i - zero >= 0 && j - one >= 0) ? dp[(k - 1) & 1][i - zero][j - one] + 1 : 0
                dp[k & 1][i][j] = Math.max(a, b)
            }
        }
    }
    console.log(dp)

    return dp[(len - 1) & 1][m][n]
}
 
var findMaxForm = function(strs, m, n) {
    return version02(strs, m, n)
};

console.log(findMaxForm(["10","0001","111001","1","0"], 5, 3))
