/**
    给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
let DigitToLetter = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]

let result = new Array()
let path = new Array()

var backtracking = (depth, digits) => {
    if (path.length == depth) {
        result.push(path.toString().replaceAll(",", ""))
        return
    } 

    let digit = digits[path.length]
    let digit_to_letter = DigitToLetter[Number(digit)]

    for (let i = 1; i <= digit_to_letter.length; i++) {
        path.push(digit_to_letter[i - 1])
        backtracking(depth, digits)
        path.pop()
    }
}

var letterCombinations = function(digits) {
    path.length = 0
    result.length = 0
    backtracking(digits.length, digits)
    console.log(result)
};

export {letterCombinations}
