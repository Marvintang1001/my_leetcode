/** 142.环形链表II(medium)
 * 给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置
 * （索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 * 
 * 说明：不允许修改给定的链表。
 * 进阶：你是否可以使用 O(1) 空间解决此题？

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。

提示：
链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
 */


/**
 * Definition for singly-linked list.
 */
function ListNode (val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * 答案：（性能上没出现多大的提升）
 * 快慢指针法：我们使用两个指针，fast 与 slow。它们起始都位于链表的头部。
 * 随后，slow 指针每次向后移动一个位置，而 fast 指针向后移动两个位置。
 * 如果链表中存在环，则 fast 指针最终将再次与 slow 指针在环中相遇。
 * 
 * 假设从头结点到环形入口节点 的节点数为x。环形入口节点到 fast指针与slow指针相遇节点 节点数为y。从相遇节点  再到环形入口节点节点数为 z。
 * 因为fast指针是一步走两个节点，slow指针一步走一个节点， 所以 fast指针走过的节点数 = slow指针走过的节点数 * 2：
 * (x + y) * 2 = x + y + n (y + z)
 * 两边消掉一个（x+y）: x + y = n (y + z)
 * 因为要找环形的入口，那么要求的是x，因为x表示 头结点到 环形入口节点的的距离。
 * 所以要求x ，将x单独放在左面：x = n (y + z) - y ,
 * 再从n(y+z)中提出一个 （y+z）来，整理公式之后为如下公式：x = (n - 1) (y + z) + z 
 * 注意这里n一定是大于等于1的，因为 fast指针至少要多走一圈才能相遇slow指针。
 * 这个公式说明什么呢？
 * 先拿n为1的情况来举例，意味着fast指针在环形里转了一圈之后，就遇到了 slow指针了。
 * 当 n为1的时候，公式就化解为 x = z
 * n如果大于1是什么情况呢，就是fast指针在环形转n圈之后才遇到 slow指针。
 * 其实这种情况和n为1的时候 效果是一样的，一样可以通过这个方法找到 环形的入口节点，
 * 只不过，index1 指针在环里 多转了(n-1)圈，然后再遇到index2，相遇点依然是环形的入口节点。
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var answer = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
}
