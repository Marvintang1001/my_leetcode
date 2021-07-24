/** 202：快乐数（easy）
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 「快乐数」定义为：
 * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 * 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到1。
 * 如果可以变为1，那么这个数就是快乐数。
 * 如果n是快乐数就返回true；不是，则返回false。

示例 1：
输入：19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

示例 2：
输入：n = 2
输出：false

提示：
1 <= n <= 2^31 - 1
 */


/** 成绩一般，时间28%和空间72%
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let dict = {};
    let curr = n;
    while (true) {
        if (dict[curr]) {
            return false;
        } else if (curr == 1) {
            return true;
        }
        let sum = 0;
        for (let num of curr+'') {
            sum += num * num;
        }
        dict[curr] = sum;
        curr = sum;
    }
};

// console.log('result:', isHappy(19));


/**
 * 题目中说了会 「无限循环」，那么也就是说「求和的过程中，sum会重复出现，这对解题很重要！
 * 当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法(Set)了。
 * 使用哈希法，来判断这个sum是否重复出现，如果重复了就是return false， 否则一直找到sum为1为止。
 */

var isHappy2 = function(n) {
    const setter = new Set();
    let a = n;
    while (true) {
        const arr = a.toString().split('').map(x => parseInt(x));
        a = arr.reduce((x, y) => x+y*y, 0);
        if (a == 1) return true;
        if (setter.has(a)) {
            return false;
        } else {
            setter.add(a);
        }
    }
}

console.log('result:', isHappy2(19));
