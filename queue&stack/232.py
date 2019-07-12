"""
my blog:https://www.cnblogs.com/marvintang1001/p/11175622.html

"""

from collections import deque

class Stack:
    def __init__(self):
        self.items = deque()    # 创建一个deque实例

    def push(self, x):
        return self.items.append(x)

    def pop(self):
        return self.items.pop()

    def top(self):
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0


class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.s1 = Stack()
        self.s2 = Stack()

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.s1.push(x)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        if self.s2.is_empty():
            while not self.s1.is_empty():
                val = self.s1.pop()
                self.s2.push(val)
        return self.s2.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        if self.s2.is_empty():
            while not self.s1.is_empty():
                val = self.s1.pop()
                self.s2.push(val)
        return self.s2.top()

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return self.s1.is_empty() and self.s2.is_empty()

def test():
# Your MyQueue object will be instantiated and called as such:
    obj = MyQueue()
    obj.push(1)
    obj.push(2)
    obj.push(3)
    print(obj.pop())    # 1
    print(obj.pop())    # 2
    print(obj.pop())    # 3

test()
