'use strict'

/** 203移除链表元素(easy)
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，
 * 并返回 新的头节点 。
 
示例 1：
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]

示例 2：
输入：head = [], val = 1
输出：[]

示例 3：
输入：head = [7,7,7,7], val = 7
输出：[]
 */


/**
 * Definition for singly-linked list.
 */
function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let a = head;
    let result = head;
    while (a != null && result != null) {
        if (result.val == val) {
            result = result.next;
            a = a.next;
        } else if (a.next != null && a.next.val === val) {
            a.next = a.next.next;
        } else {
            a = a.next;
        }
    }
    return result;
};


/**
 * 优化：
 * 在链表表头加一个ListNode（null， head）的空节点为prev，head为curr，往下遍历
 */
var answer = function(head, val) {
    let newHead = new ListNode( null ),
        prev = newHead,
        curr = head;
    newHead.next = head;
    
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
            curr = prev.next;
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    
    return newHead.next;
};


console.log('result:', removeElements(new ListNode(1, undefined), 1));
