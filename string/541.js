/** 541.反转字符串II（easy）
 * 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

示例:
输入: s = "abcdefg", k = 2
输出: "bacdfeg"
 
提示：
该字符串只包含小写英文字母。
给定字符串的长度和 k 在 [1, 10000] 范围内。
 */

const reverseChunk = (chunk, k) => {
    let a = 0, b = chunk.length < k ? chunk.length-1 : k-1;
    while (a < b) {
        chunk[a]=[chunk[b], chunk[b]=chunk[a]][0];
        a++;
        b--;
    }
    return chunk;
}


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr = s.split('');
    let res = [];
    for (let i=0; i<arr.length; i=i+2*k) {
        let chunk = i+2*k-1 < arr.length ? arr.slice(i, i+2*k) : arr.slice(i, arr.length);
        chunk = reverseChunk(chunk, k); 
        res = [...res, ...chunk];
    }
    return res.join('');
};

// console.log('result:', reverseStr("abcdefg", 2));



/**
 * 答案（时间复杂度为O(N)）

1 如果看等于1 就是没有翻转 直接返回
2 根据题目可以得出 位数取余 小于k的时候 就是翻转字符串，大于等于k的时候就是正常加上字符串
3 最后 因为判断余数等于零 所以最后一次可能加不上，所以返回的时候加上
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var answer = function(s, k) {
    if(k == 1) return s
    let result = '', temp = '', dobulek = 2 * k;
    for (let i = 0; i < s.length; i++) { 
        const element = s[i];
        let kyu = i % dobulek;
        if(kyu == 0){
            result += temp;
            temp = '';
        }
        if (kyu < k) {
            temp = element + temp;
        } else {
            temp =  temp + element;
        } 
    }
    return result + temp
};

console.log('result:', answer("abcdefg", 2));
