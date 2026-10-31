class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}

        for i in range (len(strs)):
            word = "".join(sorted(strs[i]))
            if word in map:
                map[word].append(strs[i])
            else:
                map[word] = [(strs[i])]

        return list(map.values())