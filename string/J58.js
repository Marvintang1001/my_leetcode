/** 剑指offer 58
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 
 * 示例 1：
 * 输入: s = "abcdefg", k = 2
 * 输出: "cdefgab"
 * 
 * 示例 2：
 * 输入: s = "lrloseumgh", k = 6
 * 输出: "umghlrlose"
 * 
 * 限制：1 <= k < s.length <= 10000
 * 
 * 提升一下本题难度：不能申请额外空间，只能在本串上操作。
 */


/**
 * 这道题目也非常类似，依然可以通过局部反转+整体反转 达到左旋转的目的。
 * 具体步骤为：
 * 1、反转区间为前n的子串
 * 2、反转区间为n到末尾的子串
 * 3、反转整个字符串
 * 4、最后就可以得到左旋n的目的，而不用定义新的字符串，完全在本串上操作。
 */

function reverseStr (arr) {
    // 翻转字符串 O(n)
    let a = 0, b = arr.length - 1;
    while (a < b) {
        arr[a] = [arr[b], arr[b]=arr[a]][0];
        a++;
        b--;
    }
    return arr;
}

function leftSpin (s, k) {
    const arr = s.split('');
    const left = arr.slice(0, k);
    const right = arr.slice(k);
    const newOne = reverseStr(left).concat(reverseStr(right));
    return reverseStr(newOne).join('');
}

console.log('result: ', leftSpin('lrloseumgh', 6))
