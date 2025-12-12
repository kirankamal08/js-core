// Program to remove duplucates from an array
let arr = [1, 2, 2, 3, 4, 4, 5, 5, 5,8,8,12,18,17,19,19];

function removeDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    console.log("Array with duplicates removed:", uniqueArr);
}
//removeDuplicates(arr);

function removeDup(arr) {
    let uniqueArr = [];
    for (let i = 0; i<arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    console.log("unique array so far:", uniqueArr);
}

// removeDup(arr);

// Find the second largest / smallest number in an array.
function findSecondLargestSmallest(arr) {
let largest = Number.MIN_VALUE;
let secondLargest = Number.MIN_VALUE;
let smallest = Number.MAX_VALUE;
let secondSmallest = Number.MAX_VALUE;
    for(let ar of arr) {
        if(ar > largest) {
            largest = ar;
        } else if(ar > secondLargest && ar != largest) {
            secondLargest = ar;
        }
    }
    // console.log("Largest number:", largest);
    // console.log("Second largest number:", secondLargest);
    for(let ar of arr) {
        if(ar < smallest) {
            smallest = ar;
        } else if(ar < secondSmallest && ar != smallest) {
            secondSmallest = ar;
        }
    }
    // console.log("Smallest number:", smallest);
    // console.log("Second Smallest number:", secondSmallest);
}

// findSecondLargestSmallest(arr);

// Return an array with only even/odd numbers.
arrayWithEvenOdd = (arr) => {
    let evenArr = [];
    let oddArr = [];
    for(let ar of arr) {
        if(ar % 2 == 0) {
            evenArr.push(ar)
        } else {
            oddArr.push(ar);
        }
    }
    console.log("Even array:", evenArr);
    console.log("Odd array:", oddArr);
}

// arrayWithEvenOdd(arr);

// Write a function to flatten a nested array
arrToFlatten = [1,2,3,[4,[5],6]];
function flattenArray(arrToFlatten) {
    let flatArr = [];
    for(let item of arrToFlatten) {
        if(Array.isArray(item)) {
           // console.log("Its an array");
            flatArr = flatArr.concat(flattenArray(item));
        } else {
            //console.log("Its not an array");
           // flatArr.push(arrToFlatten[i]);
           flatArr.push(item)
        } 
    }
    return flatArr;
}
//console.log("Flattened array:", flattenArray(arrToFlatten));

// Implement your own version of Array.prototype.map().
Array.prototype.myMap = function(callback) {
    let resultArr = [];
    for(let i = 0; i < this.length; i++) {
        resultArr.push(callback(this[i], i, this))
    }
    return resultArr;
}

let arrForMap = [1,2,3,4,5,6]
console.log("Using MyMap:" , arrForMap.myMap((item) => item * 2))



