class Solution(object):
    def reverseString(self, s):
        x = len(s)-1
        for i in range(len(s)/2):
            y = s[i]
            s[i]=s[x]
            s[x]= y
            x-=1
       
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        