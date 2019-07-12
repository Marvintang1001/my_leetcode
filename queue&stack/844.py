"""
my blog:https://www.cnblogs.com/marvintang1001/p/11172024.html

"""


class Solution(object):
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """

        def mycode(a):
            while '#' in a:
                po = a.find('#')

                if po == 0:
                    a = a.replace(a[po], '', 1)
                else:
                    b = a[po - 1] + '#'
                    a = a.replace(b, '')
            return a

        s = mycode(S)
        t = mycode(T)
        return s == t
