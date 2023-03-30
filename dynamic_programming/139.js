/* 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let size = s.length
    let dp = new Array(size + 1).fill(0)

    dp[0] = 1

    for (let i = 1; i <= size; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            let wordsize = wordDict[j].length
            if (dp[i - wordsize] && s.substring(i - wordsize, i) == wordDict[j]) {
                dp[i] = 1
                break
            }
        }
    }

    return dp[size]
};

console.log(wordBreak("catsandog",  ["cats", "dog", "sand", "and", "cat"]))
