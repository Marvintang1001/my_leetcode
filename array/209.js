/** 209(medium). 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

示例 2：
输入：target = 4, nums = [1,4,4]
输出：1

示例 3：
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
 
提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105

进阶：
如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 */


/** 暴力解法，On=n^2
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let size = 0;
    for (let i=0;i<nums.length;i++) {
        let sum = 0;
        for (let j=0;j<nums.length-i;j++) {
            sum += nums[i+j];
            if (sum >= target) {
                if (size === 0 || j < size) {
                    size = j+1;
                    console.log('sum:', sum, 'i:', i, 'size:', size);
                }
                break;
            }
            if (size != 0 && j+1 >= size) break;
        }
        if (size === 0) return 0;
        if (size === 1) return 1;
    }
    return size;
};


/** 滑动窗口解法：https://mp.weixin.qq.com/s/UrZynlqi4QpyLlLhBPglyg
 * 扩张窗口：为了找到一个可行解，找到了就不再扩张，扩张不再有意义。
 * 收缩窗口：在长度上优化该可行解，直到条件被破坏。
 * 继续寻找下一个可行解，然后再优化到不能优化…
 */
var answer = function(s, nums) {
    let minLen = Infinity;  // p.s: 一开始这个值设为0不利于后面取最小值
    let i = 0;
    let j = 0;
    let sum = 0;
    while (j < nums.length) {   // 主旋律是扩张，找可行解
        sum += nums[j];
        while (sum >= s) {        // 间歇性收缩，优化可行解
            minLen = Math.min(minLen, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return minLen === Infinity ? 0 : minLen; // 从未找到可行解，返回0
}
console.log('result:', answer(7, [2,3,1,2,4,3]));
