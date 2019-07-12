"""
my blog: https://www.cnblogs.com/marvintang1001/p/11176216.html

"""
from heapq import heapify, heappop


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        h = []
        for node in lists:
            while node:
                h.append(node.val)
                node = node.next

        if len(h) == 0:
            return h

        heapify(h)  # 原地建堆

        root = ListNode(heappop(h))
        cur = root
        while h:
            node = ListNode(heappop(h))
            cur.next = node
            cur = node
        return root
