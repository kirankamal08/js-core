// 1) Reverse a string manually (no .reverse() since it's not available on strings).
let strToReverse = "Hello World!";
function reverseString(strToReverse) {
    let reversedStr = "";
    for(let i = strToReverse.length - 1; i >=0; i--) {
        reversedStr += strToReverse[i]
    }
    return reversedStr;
}

console.log("Reversed string:" , reverseString(strToReverse));

// 2) Check if a string is a palindrome.
let strToCheck = "madam";
function isPalindrome(strToCheck) {
    let reversedStr = reverseString(strToCheck);
    return strToCheck === reversedStr;
}
console.log(`Is "${strToCheck}" a palindrome?`, isPalindrome(strToCheck));

// 3) Count the number of vowels/consonants in a string.
let strToCount = "Hello World!";
function countVowelsConsonants(strToCount) {
    let vowelsCount = 0
    let consonantsCount = 0;
    let vowels = "aeiouAEIOU";
    for(let char of strToCount) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantsCount++;
        }
    }
    return {vowels: vowelsCount, consonants: consonantsCount};
}
console.log(`Vowels and consonants in "${strToCount}":`, countVowelsConsonants(strToCount));

// 4) Find the first non-repeating character in a string.
let strToFind = "swiss";
function firstNonRepeatingChar(strToFind) {
    let charCount = {};
    for(let char of strToFind) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for(let char of strToFind) {
        if(charCount[char] === 1) 
            return char;
    }
    return null;
}
console.log(`First non-repeating character in "${strToFind}":`, firstNonRepeatingChar(strToFind));