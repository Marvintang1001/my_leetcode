"""
my blog:https://www.cnblogs.com/marvintang1001/p/11171889.html

"""

'''
def twoSum(self, nums: List[int], target: int) -> List[int]:
    n=len(nums)
    for i,j in itertools.combinations(range(0,n),2):
        if nums(i)+nums(j) == target:
            a=list[i,j]
            return a
'''


def twoSum(self, nums, target):
    # 用len()方法取得nums列表长度
    n = len(nums)
    # 创建一个空字典
    d = {}
    for x in range(n):
        a = target - nums[x]
        # 字典d中存在nums[x]时
        if nums[x] in d:
            return d[nums[x]], x
        # 否则往字典增加键/值对
        else:
            d[a] = x
        # 边往字典增加键/值对，边与nums[x]进行对比
