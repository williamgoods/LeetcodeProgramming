/**
  * 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
  */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) { 
        return false
    }
    let SNumbers = new Map()
    let TNumbers = new Map()

    for (let i in s) {
        const s_number = s[i]
        const t_number = t[i]

        UpdateValue(SNumbers, s_number)
        UpdateValue(TNumbers, t_number)
    }

    if (SNumbers.size != TNumbers.size) {
        return false
    }

    let isBreak = false
    for (let [key, value] of SNumbers){
        if (!TNumbers.has(key)) {
            isBreak = true
            break
        }

        if (value != TNumbers.get(key)) {
            isBreak = true
            break
        }
    }

    return !isBreak
}

function UpdateValue(OldMap, key){
    if (OldMap.has(key)) {
        let new_value = OldMap.get(key) + 1
        OldMap.set(key, new_value)      
    } else {
        OldMap.set(key, 1)
    }
}

export {isAnagram}


