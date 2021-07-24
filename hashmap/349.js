/** 349. 两个数组的交集(easy)
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

说明：
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。。
 */

 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const a = new Set(nums1);
    const b = new Set(nums2);
    const result = [];
    let len = a.size;
    b.forEach(x => {
        a.add(x);
        if (len != a.size) {
            len = a.size;
        } else {
            result.push(x);
        }
    })
    return result;
};

console.log('result:', intersection([4,9,5], [9,4,9,8,4]));

// 本题在于用set模拟哈希表查重