"""
my blog:https://www.cnblogs.com/marvintang1001/p/11174955.html

"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        if root:
            cur = [root]
            while cur:
                res.append([i.val for i in cur])
                next = []
                for i in cur:
                    if i.left:
                        next.append(i.left)
                    if i.right:
                        next.append(i.right)
                cur = next
        return res
