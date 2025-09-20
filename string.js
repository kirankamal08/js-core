// Reverse a String without using any inbuild function

function reverseString(str) {
    let reversedStr = "";
    let isPalindrome = false;
    for (let char of str) {
        reversedStr = char + reversedStr;
    }
    if(str === reversedStr) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }
    return isPalindrome ? `${str} is a palindrome` : `${str} is not a palindrome` ;
}
let str = "step pets";

console.log(reverseString(str));