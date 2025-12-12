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


/// Removing duplicates from an array

arr = [1,2,3,4,5,3,4];
let duplicate = [];

// for(let i = 0; i < arr.length; i++) {
//     let dupFlag = false;
//     for (let j = i+1; j< arr.length; j++) {
//         if(arr[i] == arr[j]) {
//           dupFlag = true
//           duplicate.push(arr[j]);
//         }
//     }
//  }
//  console.log(duplicate);
new_arr = [];
for(let i = 0; i < arr.length; i++) {
    let dupFlag = false;
    for (let j = i+1; j< arr.length; j++) {
        if(arr[i] == arr[j]) {
           dupFlag = true
           break;
          // duplicate.push(arr[j]);
        }
    }
    
    if(dupFlag != true) {
        new_arr.push(arr[i]);
        dupFlag = true;
    }
 }
 //console.log(new_arr);

// Question: Flatten a nested array
// [1, [2, [3, [4, 5]]]]

function flatteningArr(arr) {
  let newFlatArr = [];
  let result
  for(let i = 0; i<arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newFlatArr = newFlatArr.concat(flatteningArr(arr[i]));
    } else {
      newFlatArr.push(arr[i]);
    }
  }
  return newFlatArr;
}
let arr_to_flatten = [1, [2, [3, [4, 5]]]];
const flatArr = flatteningArr(arr_to_flatten);
console.log("Before flattening", arr_to_flatten);
console.log("flattened array is" ,flatArr);


 
