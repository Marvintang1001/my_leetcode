/** 《剑指offer》 05 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1：输入：s = "We are happy." 输出："We%20are%20happy."
 */


/** 解析：
 * 首先扩充数组到每个空格替换成"%20"之后的大小。
 * 然后从后向前替换空格，也就是双指针法，过程如下：
 * i指向新长度的末尾，j指向旧长度的末尾。
 * 
 * 很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作。
 * 这么做有两个好处：
 * 1、不用申请新数组
 * 2、从后向前填充元素，避免了从前先后填充元素要来的 每次添加元素都要将添加元素之后的所有元素向后移动。
 */
function replaceSpace (s) {
    let arr = s.split('');
    let i = arr.length-1;
    const kk = arr.filter(x => x == ' ');
    const num = (kk).length;
    for (let i=0; i < num * 2; i++) {
        arr.push(' ');
    }
    let j = arr.length-1;
    while (i != j) {
        if (arr[i] == ' ') {
            arr[j] = '0';
            j--;
            arr[j] = '2';
            j--;
            arr[j] = '%';
        } else {
            arr[j] = arr[i];
        }
        j--;
        i--;
    }
    return arr;
}

console.log('res: ', replaceSpace('We are happy.'));
