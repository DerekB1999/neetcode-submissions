class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const used = new Array(t.length).fill(false);     
        let found;

        for(let i = 0; i < s.length; ++i){
            found = false;
            for(let j = 0; j < t.length; ++j){
                if(!used[j] && s[i] === t[j]){
                    used[j] = true;
                    found = true;
                    break;
                }
            }
            if(!found) return false;
        }
        return true;
    }
}
