/** 59.螺旋矩阵II（medium）
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序
 * 螺旋排列的 n x n 正方形矩阵 matrix

示例 1：
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]

示例 2：
输入：n = 1
输出：[[1]]

提示：
1 <= n <= 20
 */



split_array=(arr,len)=>{
	let arr_length = arr.length;
	let newArr = [];
	for(let i=0;i<arr_length;i+=len){
		newArr.push(arr.slice(i,i+len));
	}
	return newArr;
}


/** 我的思路：四种方式添加数字；除了第一行外，每种方式依次执行两遍（每遍为n-k次）直到值到达n*n为止
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const obj = {};  // {位置：值}
    let result = Array.from({length: n}, (v, k) => k+1);
    let tag = n-1;
    let time = 1;
    let way = 2;  // 1~4
    let loc = n;  // 从0开始
    let cal = 1;
    if (n > 1) {
        for (let v=n+1;v<=n*n;v++) {
            switch (way) {
                case 1:
                    loc += 1; break;
                case 2:
                    loc += n; break;
                case 3:
                    loc -= 1; break;
                case 4:
                    loc -= n;
            }
            if (time == tag) {
                if (cal % 2 == 0) tag -= 1;
                time = 1;
                cal ++;
                way = way === 4 ? 1 : way + 1; 
            } else {
                time ++;
            }
            // console.log('loc:', loc, 'time:', time, 'v:', v);
            obj[loc] = v;
        }
    }
    for (let i=n+1;i<=n*n;i++) {
        result.push(obj[i]);
    }
    return split_array(result, n);
};


/** 答案
 * 解题思路:
 * r生成n * n二维数组，r[y][x]表示第y行第x列，i从1到n的n次方递增
 * 按→↓←↑顺序，碰撞到边界b 转向
 * →列x++。↓行y++。←列x--。↑行y--。填完i返回r即可
 */

var answer = function(n) {
    var b = [0, n - 1, 0, n - 1], x = 0, y = 0, i = 0, d = '→', r = new Array(n).fill(0).map(_=>new Array(n).fill(0))
    while (i++ < Math.pow(n, 2)) {
        d === '→' && (r[y][x++] = i, x === b[1] && (d = '↓', ++b[2])) ||
        d === '↓' && (r[y++][x] = i, y === b[3] && (d = '←', b[1]--)) ||
        d === '←' && (r[y][x--] = i, x === b[0] && (d = '↑', b[3]--)) ||
        d === '↑' && (r[y--][x] = i, y === b[2] && (d = '→', ++b[0]))
        // console.log('x=', x, 'y=', y, 'b=', b);
    }
    return r
};

// console.log('result:', generateMatrix(3));
console.log('result:', answer(3));
