"""
my blog: https://www.cnblogs.com/marvintang1001/p/11171779.html

"""


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        nextnode = node.next
        node.val = nextnode.val
        node.next = nextnode.next
