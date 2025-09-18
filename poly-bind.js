// Normal in built bind functionn

let name = {
    firstname : "Karan",
    lastname:"Sinha"
}

let printFullName = function(param,param2) {
    return this.firstname + " " + this.lastname + " Loves " + param + " and " + param2;
}

let printFullNameBind = printFullName.bind(name);
//console.log(printFullNameBind());

// Normal in built bind function


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
console.log(printFullNameMyBind("Dancing", "Travelling"));
