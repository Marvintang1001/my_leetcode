/** 151.翻转字符串里的单词(meidum)
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 说明：
 * 无空格字符构成一个单词 。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

示例 1：
输入："the sky is blue"
输出："blue is sky the"

示例 2：
输入："  hello world!  "
输出："world! hello"
解释：输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

示例 3：
输入："a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

示例 4：
输入：s = "  Bob    Loves  Alice   "
输出："Alice Loves Bob"

示例 5：
输入：s = "Alice does not even like bob"
输出："bob like even not does Alice"
 
提示:
1 <= s.length <= 104
s 包含英文大小写字母、数字和空格 ' '
s 中 至少存在一个 单词

进阶：请尝试使用 O(1) 额外空间复杂度的原地解法。
 */


/** time(18.99%), ram(26.7%)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let end = s.length-1, start = s.length-1;
    const place = [];
    while (end>=0) {
        if (s[end] == ' ') {
            end -= 1;
            continue;
        }
        if (start>end) start = end;
        if (!s[start] || s[start] == ' ') {
            place.push(s.slice(start+1, end+1));
            end = start-1;
        } else {
            start -= 1;
        }
    }
    return place.join(' ');
};

// console.log('result:', reverseWords(' a  good example'));

/** 答案：time(25.2%), ram(62%)
 * 正则
 * @param {string} s 
 */
var answer = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}
console.log('result:', answer(' a  good example'));
