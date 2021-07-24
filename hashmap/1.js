/**
 * 1、两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，
 * 并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 「示例:」
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */


/** 解题思路
 * 使用哈希法最为合适，之前已经介绍过，数组和set在哈希法中的应用，那么来看一下使用数组和set来做哈希法的局限。
 * array的大小是受限制的，而且如果元素很少，而哈希值太大会造成内存空间的浪费。
 * set是一个集合，里面放的元素只能是一个key，而两数之和这道题目，不仅要判断y是否存在而且还要记录y的下表位置，
 * 因为要返回x 和 y的下表。所以set 也不能用。
 * 此时就要选择另一种数据结构：map ，map是一种key value的存储结构，可以用key保存数值，用value在保存数值所在的下标。
 */
function twoSum(nums, target) {
    const mapper = new Map();
    for (let [index, num] of nums.entries()) {
        mapper.set(num, index);
    }
    for (let i=0; i<nums.length; i++) {
        const key = target - nums[i];
        const tag = mapper.get(key);
        if (!!tag) {
            return [i, tag];
        }
    }
    return [];
}

console.log('result:', twoSum([2, 7, 11, 15], 9));
