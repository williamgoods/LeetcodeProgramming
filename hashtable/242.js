/**
    给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

    注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    let record = new Map()

    for (let i = 0; i < s.length; i++) {
        let s_i = s[i]
        if (record.has(s_i)) {
            record.set(s_i, record.get(s_i) + 1)
        } else {
            record.set(s_i, 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        let t_i = t[i]

        if (record.has(t_i)) {
            record.set(t_i, record.get(t_i) - 1)
        } else {
            return false
        }
    }

    for (let key in record) {
        let value = record[key]
        if (value != 0) {
            return false
        }
    }

    return true
};

export {isAnagram}
