

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        root = ListNode(None)
        cur = root
        while l1 and l2:     # 有任何一个是None就会退出循环
            if l1.val > l2.val:
                node = ListNode(l2.val)
                l2 = l2.next
            else:
                node = ListNode(l1.val)
                l1 = l1.next
            cur.next = node
            cur = node
        # l1或l2剩余元素的元素加进来：
        cur.next = l1 or l2
        return root.next    # 头节点是空所以不要它


