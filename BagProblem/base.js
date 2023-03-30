function testWeightBagProblem(weight, value, size) {
    let len = weight.length

    let dp = new Array(len).fill().map(() => new Array(size + 1).fill(0))

    for (let i = weight[0]; i <=size; i++) {
        dp[0][i] = value[0]
    }

    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= size; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j -weight[i]] + value[i])
            }
        }
    }
    
    return dp[len - 1][size]
}

function testWeightBagProblem2(weight, value, size) {
    let len = weight.length
    let dp = new Array(2).fill().map(() => new Array(size + 1).fill(0))

    let Prev = 0
    
    for (let i = weight[0]; i <= size; i++) {
        dp[Prev][i] = value[0]
    }

    console.log(dp)

    for (let i = 1; i < len; i++) {
        let Current = Number(!Prev)
        console.log("Current is ", Current)
        for (let j = 1; j <= size; j++) {
            if (j < weight[i]) {
                dp[Current][j] = dp[Prev][j]
            } else {
                dp[Current][j] = Math.max(dp[Prev][j], dp[Prev][j - weight[i]] + value[i])
            }
        }
        Prev = Current
    }
    console.log(dp)

    return dp[Prev][size]
}

function test () {
    console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
    console.log(testWeightBagProblem2([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

export {testWeightBagProblem2}
