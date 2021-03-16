/** 454.四数之和II（medium）
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l)，
 * 使得 A[i] + B[j] + C[k] + D[l] = 0。为了使问题简单化，所有的 A, B, C, D
 * 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，
 * 最终结果不会超过 231 - 1 。

例如:
输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]
输出:  2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 */


const operatePointer = (pointer, type, len) => {
    let {a, b, c, d} = pointer;
    if (type == 'next') {
        d += 1;
    } else {
        d = 0;
        c += 1;
    }
    if (d >= len) {
        c += 1;
        d = 0;
    }
    if (c >= len) {
        b += 1;
        c = 0;
    }
    if (b >= len) {
        a += 1;
        b = 0;
    }
    return {a, b, c, d};
}


/** 四层遍历，超时了。。。
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    C.sort((a, b) => a - b);
    D.sort((a, b) => a - b);
    let pointer = {a: 0, b: 0, c: 0, d: 0};
    let result = 0;
    const len = A.length;
    while (pointer.a<len) {
        const {a, b, c, d} = pointer;
        const res = A[a]+B[b]+C[c]+D[d];
        if (res == 0) {
            result += 1;
            pointer = operatePointer(pointer, 'next', len);
        } else if (res < 0) {
            pointer = operatePointer(pointer, 'next', len);
        } else {
            pointer = operatePointer(pointer, 'break', len);
        }
    }
    return result;
};
// console.log('res:', fourSumCount([1, 2], [-1, -2], [-1, 2], [0, 2]));


/** 对象解法
 * p.s：多数运算结果等于指定值问题都可转为两数相加
    首先定义 一个unordered_map，key放a和b两数之和，value 放a和b两数之和出现的次数。
    遍历大A和大B数组，统计两个数组元素之和，和出现的次数，放到map中。
    定义int变量count，用来统计a+b+c+d = 0 出现的次数。
    在遍历大C和大D数组，找到如果 0-(c+d) 在map中出现过的话，就用count把map中key对应的value也就是出现次数统计出来。
    最后返回统计值 count 就可以了
 */
const answer1 = function (A, B, C, D) {
    let sumAB = {};
    for (let i=0;i<A.length;i++) {
        for (let j=0;j<B.length;j++) {
            const sum = A[i]+B[j];
            sumAB[sum] = !!sumAB[sum] ? sumAB[sum]+1 : 1;
        }
    }
    let result = 0;
    for (let i=0;i<C.length;i++) {
        for (let j=0;j<D.length;j++) {
            const sum = 0 - C[i]-D[j];
            result += sumAB[sum] || 0;
        }
    }
    return result;
}
// console.log('res:', answer1([1, 2], [-1, -2], [-1, 2], [0, 2]));

/**
 * （但是obj在这种情况没有map快）
 * Map：
    默认不包含任何键
    提供has方法，与get复杂度相同，但无需区分undefined与假值。语义可读性更好
    优化了频繁增删键值对的场景，在大量数据增删时，提升明显

 * 小结：
    键名多连续，极小值极大值差小，优先数组
    键名按小到大排序，优先 数组 或 Object
    键名按插入顺序排序。优先 Map
    频繁读取长度。优先 数组，Map
    频繁增删键值对。优先 Map

 * 此外，for比forEach和reduce快的原因是：仅循环场景中，循环次数越多，for优势越明显
 */
const answer2 = function (A, B, C, D, t, h = new Map, r = 0) {
    for (var i = 0; i < A.length; i++) for (var j = 0; j < B.length; j++) h.set(t = 0 - A[i] - B[j], h.has(t) ? h.get(t) + 1 : 1)
    for (var i = 0; i < C.length; i++) for (var j = 0; j < D.length; j++) h.has(t = C[i] + D[j]) && (r += h.get(t))
    return r
}
console.log('res:', answer2([1, 2], [-1, -2], [-1, 2], [0, 2]));
