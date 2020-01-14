/* Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const lookup = {};
    
    for ( let i = 0; i < s.length; i++){
        let letter = s[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    for(let i = 0; i < t.length; i++){
        let letter = t[i];
        if(!lookup[letter]) {
            return false; 
        } else{
            lookup[letter] -= 1;
        }
    }
    return true;
};