/**
假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个people[i] = [hi, ki] 表示第 i 个人的身高为hi ，前面正好有 ki 个身高大于或等于 hi 的人。

请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。
 */

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort(function(a, b) {
        if (a[0] != b[0]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })

    console.log(people)

    let n = people.length
    let ans = new Array(n).fill(0)
    
    for (let i = 0; i < n; i++) {
        let step = people[i][1] + 1

        for (let j = 0; j < n; j++) {
            if (!ans[j]) {
                step--
            } 
            if (!step) {
                ans[j] = people[i] 
                break
            }
        }
    }
    
    return ans
};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))
