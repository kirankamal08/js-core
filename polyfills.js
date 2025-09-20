// Normal in build bind functionn

let name = {
    firstname : "Karan",
    lastname:"Sinha"
}

let printFullName = function(param,param2) {
    return this.firstname + " " + this.lastname + " Loves " + param + " and " + param2;
}

let printFullNameBind = printFullName.bind(name);
//console.log(printFullNameBind());

// Normal in build bind function


//Polyfill for bind function

Function.prototype.myBind = function(...abc) {
    const fn = this;  // <-- save original function
    return function(...args) {
        let context = abc[0];         // first arg is "thisArg"
        let params = [...abc.slice(1), ...args]; // pre-applied + new args
        return fn.apply(context, params);
    }
}


printFullNameMyBind = printFullName.myBind(name,"Music");
//console.log(printFullNameMyBind("Dancing", "Travelling"));

// Map function
let arr = [1,2,3,4,5];
let mappedArr = arr.map(function(x) {
    return x + 1;
})

let mappedArrWArrowFn = arr.map((x) => x * 2)

// console.log(mappedArr);
// console.log(mappedArrWArrowFn);

// polyfill of map function

Array.prototype.MyMap = function(cb) {
    let result = [];
    let currArr = this;
    for (let i = 0; i<currArr.length; i++) {
        result.push(cb(currArr[i], i, currArr));
    }
  return result;
}

let customMappedArr = arr.MyMap((x) => x + 10);
// console.log(customMappedArr);

// Reduce function
let filteredValue = arr.filter(function(x) {
    return x % 2 === 0;
})

// filter using arrow function
let filteredValuedArrowFn = arr.filter((x) => x % 2 !== 0);
// console.log(filteredValue);
// console.log(filteredValuedArrowFn);

// Polyfill of filter function
Array.prototype.MyFilter = function(cb) {
let resultOfFilter  = [];
let currArrFilter = this;
    for (let i = 0; i < currArrFilter.length; i++) {
        if(cb(currArrFilter[i], i, currArrFilter)) {
            resultOfFilter.push(currArrFilter[i]);
        }
    }
    return resultOfFilter;
}
let arr1 = [1,2,3,4,5];
// console.log(arr1.MyFilter((x) => x > 2));

// Reduce Function implementation
let reducedValue = arr1.reduce(function(acc, currVal) {
   return acc + currVal;
}, 5)

//console.log(reducedValue)

let reducedValueArrowFn = arr1.reduce((acc, currVal) => acc + currVal , 10);
//console.log(reducedValueArrowFn)

// Pollyfill for reduce function

let arrForReduce = [5,7,1,2,4,6];

//let reducedArr = arr.reduce((acc , value) => acc + value , 2 );

Array.prototype.MyReduce = function(cb, initialValue) {
    let acc;
    let currArr = this;
    let startIndex;
    if(initialValue !== undefined) {
        acc = initialValue;
        startIndex = 0;
    } else {
        acc = currArr[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i< currArr.length; i++) {
        acc = cb(acc, currArr[i], i, currArr);
    }
    return acc;
}

let reducedArr = arrForReduce.MyReduce((acc, val) => acc + val, 2);
// console.log(reducedArr);

// Usage of call function

let person = {
    firstname:'kiran',
    lastname:'kamal',
}
 let person2 = {
    firstname: 'Rahul',
    lastname: 'Sharma'
 }
  function greet (age,country) {
        return "Hello " + this.firstname + " " + this.lastname + " is of age " + age + " from " + country;
 }

// console.log(person.greet('22'));
// console.log(person.greet.call(person2));
//console.log(greet.call(person,'22'));


// polyfill for call function
Function.prototype.MyCall = function(obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Not a function');
    }
    obj.fn = this; // <!-- assigning function to object -> cosole it to see how it looks for more clarity how it will be assigned
   return obj.fn(...args);
}
console.log(greet.MyCall(person, 22 , "india"));
