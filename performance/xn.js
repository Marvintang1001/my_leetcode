// 同一道题目，同样使用递归算法，有的同学会写出了O(n)的代码，有的同学就写出了O(logn)的代码

/**
 * 求x的n次方
 * 要求时间复杂度小于O(n)
 */


// 递归的时间复杂度本质是“递归的次数 * 每次递归中的操作次数”
// 时间复杂度：O(n)
function nSquare1 (x, n) {
    if (n == 0) return 1;
    return nSquare1(x, n-1) * x;
}

// 用二叉树；总结点数为n+1，依然是O(n)
function nSquare2 (x, n) {
    if (n == 0) return 1;
    if (n % 2 == 1) {
        return nSquare2(x, n/2) * nSquare2(x, n/2) * x
    }
    return nSquare2(x, n/2) * nSquare2(x, n/2);
}

// 时间复杂度：O(logn)
// 每次都是n/2 ，所以这里我们一共调用了log以2为底n的对数次
function nSquare3(x, n) {
    if (n==0) return 1;
    const t = nSquare3(x, n/2);
    if (n%2==1) {
        return t*t*x;
    }
    return t*t;
}

console.log(nSquare3(2, 16));
