"""
my blog: https://www.cnblogs.com/marvintang1001/p/11177021.html

"""

from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums).most_common()       # 按出现次数从大到小排列
        alist = []
        for i in range(k):
            alist.append(counter[i][0])     # 返回的是一个元组：【0】是字符串，【1】是出现次数
        return alist

