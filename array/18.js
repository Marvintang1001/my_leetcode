/** 18 四数之和
 * 题意：给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
 * 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 答案中不可以包含重复的四元组。
 * 示例：给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。满足要求的四元组集合为：
 * [ [-1,  0, 0, 1], [-2, -1, 1, 2], [-2,  0, 0, 2] ]
 */


/**
 * 将原本暴力O(n^4)的解法，降为O(n^3)的解法
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了87.32%的用户
 * 内存消耗：39.3 MB, 在所有 JavaScript 提交中击败了95.82%的用户
 */

function fourSum (nums, target) {
    const res = [];
    nums.sort((a, b) => a-b);

    for (let h=0;h<nums.length;h++) {
        if (h>0 && nums[h] == nums[h-1]) continue;

        for (let i=h+1;i<nums.length;i++) {
            if (i>h+1 && nums[i] == nums[i-1]) continue;

            let j = i + 1;
            let k = nums.length -1;

            while(j<k) {
                const sum = nums[h] + nums[i] + nums[j] + nums[k];
                if (sum < target) {
                    j++;
                } else if (sum > target) {
                    k--;
                } else {
                    res.push([nums[h], nums[i], nums[j], nums[k]]);
                    while(j<k && nums[k-1] == nums[k]) k--;
                    while(j<k && nums[j+1] == nums[j]) j++;
                    k--;
                    j++;
                }
            }
        }
    }
    return res;
}

// console.log('res:', fourSum([2,2,2,2], 8));
// console.log('res:', fourSum([1,0,-1,0,-2,2], 0));
console.log('res:', fourSum([1,-2,-5,-4,-3,3,3,5], -11));
