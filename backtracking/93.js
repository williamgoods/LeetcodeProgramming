/**
有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

    例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
*/

/**
 * @param {string} s
 * @return {string[]}
 */

let result = new Array()
let path = new Array()

var backtracking= (s, startIndex, width, depth) => {
    if (path.length > depth) {
        return
    } else if (path.length == depth && startIndex >= s.length) {
        let ValidIP = path.toString().replaceAll(",", ".") 
        if (!result.includes(ValidIP)) {
            result.push(ValidIP)
        }
        return
    } else {
        for (let i = startIndex; i < startIndex + width; i++) {
            let subip = s.substring(startIndex, i + 1)
            console.log("subip is ", subip)
            
            if (!IsLegal(subip)) {
                return
            }
            path.push(subip)
            backtracking(s, i + 1, width, depth)
            path.pop()
        }
    }
}

let IsLegal = (str) => {
    if (str.length == 0) {
        return false
    } 

    let i = 0
    if (str.length > 1) {
        for (; i < str.length; i++) {
            if (str[i] != "0") {
                break
            }    
        }
    }

    if (i != 0) {
        return false
    }

    let number = Number(str)
    if (number < 0 || number > 255 || number == NaN) {
       return false 
    }

    return true
}

var restoreIpAddresses = function(s) {
    path.length = 0 
    result.length = 0

    backtracking(s, 0, 3, 4)
    console.log(result)
};

export {restoreIpAddresses}
