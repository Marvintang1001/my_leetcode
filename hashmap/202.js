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
 * 可能更快的解决办法：快慢指针
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

console.log('result:', isHappy(19));
