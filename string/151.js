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

/* 正则
 * @param {string} s 
 */
var answer = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}
// console.log('result:', answer(' a  good example'));

/** “反转再反转”
 * 们将整个字符串都反转过来，那么单词的顺序指定是倒序了，只不过单词本身也倒叙了，那么再把单词反转一下，单词不就正过来了。
 * 举个例子，源字符串为："the sky is blue "
 * 移除多余空格 : "the sky is blue"
 * 字符串反转："eulb si yks eht"
 * 单词反转："blue is sky the"
 * 还是双指针法
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

function reverseWords2 (s) {
    let arr = s.split('');
    arr = reverseStr(arr);
    // 删除多余空格 快慢指针 O(n)
    let c = 0, d = 0;
    while (arr[d] == ' ' && d < arr.length) {
        d++;
    }
    for (c;c<d;c++) {
        arr.shift();
    }
    while (d < arr.length -1) {
        if (arr[d] != ' ') {
            c++;
            d++;
        } else {
            while(arr[d] == ' ' && d < arr.length -1) {
                d++;
            }
            arr.splice(c, d-c-1);
            c = d;
        }
    }
    if (arr[d] == ' ') arr.pop();
    // 翻转单词 (这步有错)
    let i=0, j=0;
    let str = '';
    while (j < arr.length -1) {
        j++;
        if(arr[j] == ' ' || j == arr.length) {
            str = str + reverseStr(arr.slice(i, j-1)).join('');
            if (j < arr.length) str = str + ' ';
            i = j+1;
        }
    }
    return str;
    // return arr.join('');
}

console.log(reverseWords2(' a  good example  '));
