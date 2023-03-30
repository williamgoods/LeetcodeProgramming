/**
给定一个数组 trees，其中 trees[i] = [xi, yi] 表示树在花园中的位置。

你被要求用最短长度的绳子把整个花园围起来，因为绳子很贵。只有把 所有的树都围起来，花园才围得很好。

返回恰好位于围栏周边的树木的坐标。
*/

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
let sub = (a, b) => {
    return [b[0] - a[0], b[1] - a[1]]
}

let check = (p, q, r) => {
    let prev = sub(p, q)
    let next = sub(q, r)

    return (prev[0] * next[1] - prev[1] * next[0]) > 0
}

var outerTrees = function(trees) {
    if (trees.length <= 2) {
        return trees
    }

    trees.sort((a, b) => {
        if (a[0] != b[0]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })
    console.log(trees)

    let n = trees.length
    let used = new Array(n).fill(0)
    let S = new Array()
    
    S.push(0)
    for (let i = 1; i < n; i++) {
        while (S.length > 1 && check(trees[S[S.length - 2]], trees[S[S.length - 1]], trees[i])) {
            used[S[S.length - 1]] = 0
            S.pop()
        }

        used[i] = 1
        S.push(i)
    }

    for (let i = n - 2; i >= 0; i--) {
        if (used[i]) {
            continue
        }

        while (S.length > 1 && check(trees[S[S.length - 2]], trees[S[S.length - 1]], trees[i])) {
            S.pop()
        }
        S.push(i)
    }

    let result = new Array()

    for (let i = 1; i < S.length; i++) {
        result.push(trees[S[i - 1]])
    }

    return result
};

console.log(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))
console.log(outerTrees([[0,0],[0,100],[100,100],[100,0],[50,50]]))

