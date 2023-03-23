/**
    在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

    你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

    给定两个整数数组 gas 和 cost ，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let size = gas.length
    let status = new Array()

    for (let i = 0;i < size; i++) {
        status.push(gas[i] - cost[i]) 
    }

    let result = status.reduce((sum, a) => sum + a, 0)
    console.log(status)
    if (result >= 0) {
        let sum = 0
        let i = 0 
        let rotate = 0
        let result = i
        
        while (true) {
            sum += status[i % size]
            i++

            if (sum < 0) {
                sum = 0
                rotate = 0
                result = i
                console.log("result is ", result)
            } else {
                rotate += 1
            }
            console.log("rotate is ", rotate)

            if (rotate == size) {
                break
            }
        }

       return result 
    } else {
        return -1
    }
};

export {canCompleteCircuit}
