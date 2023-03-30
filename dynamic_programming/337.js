/**
小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var backstacking = function(root, records, use) {
    if (!root) {
        return 0
    }

    if (records.get(root) && use) {
        return records.get(root)
    }

    let left = root.left 
    let right = root.right
    
    let LeftNotUse = backstacking(left, records, 0) 
    let RightNotUse = backstacking(right, records, 0) 

    if (use) {
        let root_use_value = root.val + LeftNotUse + RightNotUse
        records.set(root, root_use_value)
        return root_use_value
    }

    let LeftUse = 0
    if (records.has(left)) {
        LeftUse = records.get(left)
    } else {
        LeftUse = backstacking(left, records, 1) 
    }

    let RightUse = 0
    if (records.has(right)) {
        RightUse = records.get(right)
    } else {
        RightUse = backstacking(right, records, 1) 
    }

    return Math.max(LeftNotUse + RightNotUse, 
                    LeftUse + RightNotUse, 
                    LeftNotUse + RightUse,
                    LeftUse + RightUse)
}

var rob = function(root) {
    let records = new Map() 
    let UseRoot = backstacking(root, records, 1)
    let NoUseRoot = backstacking(root, records, 0)
    return Math.max(UseRoot, NoUseRoot)
};
