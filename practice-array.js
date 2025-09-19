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
//console.log(reverseString("hello")); // Output: "olleh"

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
      // check for sparse arrays
      if (i in this) {
        result.push(callback.call(thisArg, this[i], i, this));
      }
    }
    return result;
  };
}


const nums = [1, 2, 3];
const doubled = nums.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6]
