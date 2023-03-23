/**
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

    现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

    网格中的障碍物和空位置分别用 1 和 0 来表示。
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (m == 1 && n == 1) {
        return 1 - obstacleGrid[0][0]
    }

    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = new Array(m)
    
    console.log("m is ", m, ", n is ", n)

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n).fill(1)
    }
    console.log(dp)

    dp[0][0] = 1 - obstacleGrid[0][0]
    
    let status = false

    for (let i = 1; i < m; i++) {
        if (dp[i - 1][0] == 0 || obstacleGrid[i][0] == 1) {
            dp[i][0] = 0
            status = true 
        }
    }

    if (n == 1) {
        if (status) {
            return 0
        } else {
            return 1
        }
    }

    status =false
    for (let i = 1; i < n; i++) {
        if (dp[0][i - 1] == 0 || obstacleGrid[0][i] == 1) {
            dp[0][i] = 0

            status = true
        }
    }
    console.log("status is ", status)

    if (m == 1) {
        if (status) {
            return 0
        } else {
            return 1
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 0) {
                let top_element = dp[i - 1][j]
                let bottom_element = dp[i][j - 1]

                dp[i][j] = 0
                if (obstacleGrid[i - 1][j] == 0) {
                    // console.log("top_element: ", top_element)
                    dp[i][j] += top_element
                }

                if (obstacleGrid[i][j - 1] == 0) {
                    // console.log("botttom_element: ", bottom_element)
                    dp[i][j] += bottom_element
                }
            } else {
                dp[i][j] = 0    
            }
        }
    }

    return dp[m - 1][n - 1]
};

export {uniquePathsWithObstacles}
