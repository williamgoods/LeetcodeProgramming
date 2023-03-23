/**
    给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

    在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

    返回 你能获得的 最大 利润 。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let winprice = 0
    let result = new Array()
    let prevdiff = 0
    let curdiff = 0

    for (let i = 0; i < prices.length - 1; i++) {
        curdiff = prices[i + 1] - prices[i]
        console.log("curdiff: ", curdiff)
        if ((prevdiff >= 0 && curdiff < 0) || (prevdiff <= 0 && curdiff > 0)) {
            result.push(prices[i])
        }

        prevdiff = curdiff
    }
    console.log(result)
    
    for (let i = 1; i < result.length; i++) {
        if (result[i] > result[i - 1]){
            winprice +=  result[i] - result[i - 1]
        }
    }
    
    let diff = prices[prices.length - 1] - result[result.length - 1]
    if (diff > 0) {
        winprice +=  diff
    }

    return winprice
};

export {maxProfit}
