/** 206反转一个单链表(easy)
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */


function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const makeNode = (arr) => {
    if (arr.length == 0) return null;
    const val = arr.shift();
    const next = makeNode(arr) || null;
    const node = new ListNode(val, next);
    return node;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var iteration = function(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let next = head.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return curr;
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var recursion = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = recursion(head.next);
    // 最后的操作是把链表 1->2->null 变成 2->1->null
    // head是1，head.next是2，head.next.next = head 就是2指向1，此时链表为 2->1->2
    head.next.next = head;
    // 防止链表循环，1指向null，此时链表为 2->1->null，整个链表为 5->4->3->2->1->null
    head.next = null;
    return newHead;
};

const test = makeNode([1,2,3,4,5]);
// console.log('test:', test);
// console.log('recursion:', recursion(test));
console.log('iteration:', iteration(test));
