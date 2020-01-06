/*Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]*/

//My first solution
var reverseString = function(s) {
    return s.reverse();
};

//My second solution
var reverseString = function(s) {
    return s.split('').reverse().join('');
};

//My Third solution
var reverseString = function(s) {
    let result = ''
    for(let i= s.length -1; i >= 0; i--){
        result += s[i];
    }
    return result;
};