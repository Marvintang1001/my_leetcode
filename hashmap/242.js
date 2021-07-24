/** 242.有效的字母异位词(easy)
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false

说明:你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let dict = {};
    s.split('').map(x => {
        dict[x] = dict[x] ? dict[x]+1 : 1;
    });
    const arr = t.split('');
    for (let i=0; i<arr.length; i++) {
        if (!dict[arr[i]]) {
            return false;
        } else {
            dict[arr[i]] -= 1;
        }
    }
    const zeroArr = Object.values(dict).reduce((x,y) => x+y, 0);
    return !zeroArr;
};

// console.log('result:', isAnagram('anagram', 'nagaram'));


/**
 * 数组形式的哈希表
 * 如：'apple'
 *   a   p   l   e
 * ---------------
 * | 1 | 2 | 1 | 1 |
 * ----------------
*/ 
var isAnagram2 = function(s, t) {
    const arr = new Array(26);
    arr.fill(0);
    // a的ascii编码为97
    s.split('').map(x => {
        const num = x.charCodeAt() - 97;
        arr[num] += 1;
    })
    t.split('').map(x => {
        const num = x.charCodeAt() - 97;
        arr[num] -= 1;
    })
    return arr.filter(x => x != 0).length == 0;
}

console.log('result:', isAnagram2('anagram', 'nagaram'))
