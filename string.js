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

// console.log(reverseString(str));

// Count vowels in a string
function countVowelsAndConsonants(string) {
    let vowels = 'aeiouAEIOU';
    let vowels_count = 0;
    let consonant_count = 0;
    for (let char of string) {
        if (vowels.includes(char)) {
            vowels_count++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonant_count++;
    }
    }
    return {vowels: vowels_count, consonants: consonant_count};
}
 let str_for_vowel_count = "hello world"
console.log(countVowelsAndConsonants(str_for_vowel_count));