/** 35.搜索插入位置（easy）
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 0
输出: 0
 */


// 二分查找法（js中slice(begin, end)方法是根据序号左闭右开截取）:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let arr = nums
    let result = 0;
    while (true) {
        const len = arr.length;
        if (len === 1) {
            if (arr[0] >= target) {
                return result;
            } else {
                return result+1;
            }
        }
        if (len === 2) {
            const a = arr[0];
            const b = arr[1];
            if (target <= a) {
                return result;
            } else if (target > a && target <= b) {
                return result+1;
            } else {
                return result+2;
            }
        }
        const mid = Math.ceil(len/2);
        if (arr[mid] > target) {
            arr = arr.splice(0, mid);
        } else {
            arr = arr.splice(mid, len-1);
            result += mid;
        }
    }
};

const re = searchInsert([1,3,5,6], 5);
console.log(re);


/**
 * 执行结果：通过
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了91.28%的用户
 * 内存消耗：38.6 MB, 在所有 JavaScript 提交中击败了86.05%的用户
 */
