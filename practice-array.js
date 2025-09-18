// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
//console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// Function to remove duplicates from an 

// reverse a string without using in-built function
function reverseString(str) {
    let reversed = '';
    for (let char of str) {
      //  console.log(char);

        reversed = char + reversed;
        console.log(reversed);
    }
    return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"