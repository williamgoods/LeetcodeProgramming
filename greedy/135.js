/**
    n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

    你需要按照以下要求，给这些孩子分发糖果：

    每个孩子至少分配到 1 个糖果。
    相邻两个孩子评分更高的孩子会获得更多的糖果。
    请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var _candy = function(ratings) {
    let size = ratings.length
    let candy = new Array(size)
    candy.fill(1)

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i - 1] + 1
        }
    }

    for (let i = size - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candy[i] = Math.max(candy[i], candy[i + 1] + 1)
        }
    }

    let result = 0

    for (let i = 0; i < candy.length; i++) {
        result += candy[i]
    }

    return result
};

var candy = function(ratings) { 
    let size = ratings.length
    let candy = new Array(size)
    candy.fill(1)

    for (let i = 1; i < size; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i - 1] + 1
        }
    }

    for (let i = size - 1; i >= 1; i--) {
        if (ratings[i - 1] > ratings[i]) {
            candy[i - 1] = Math.max(candy[i - 1], candy[i] + 1)
        }
    }

    return candy.reduce((a, b) => a + b, 0)
};

console.log(candy([1,3,2,2,1]))
