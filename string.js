// Reverse a String without using any inbuild function

//const { use } = require("react");

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
//console.log(countVowelsAndConsonants(str_for_vowel_count));


// Reverse a string using array and reduce

let username = "Aparna";
let reversedString = ""; 
for (let i = 0; i<username.length; i++) {
    reversedString = username[i] + reversedString;
}

// console.log("Origial String is ",username);
// console.log("reversed string is ",reversedString);


// Reversing a string using reduce

// What reduce does is, it reduces an operation to a value to a single value, There are 2 parameters that
// reduce function receives that are - accumulator, current

// accumultor -> accumulator contains a value that accumulated by an specific operation each time as specified
// return it as an output

// current -> Current value is each value of an iteration

// There is one more parameter that in initial value given to the reduce function that is optional

let username_arr = Array.from(username);
const reversed_str = username_arr.reduce((acc, curr) => curr + acc, '').split("");

console.log("Original string is",username_arr);
console.log("reversed string using reduce function",reversed_str);