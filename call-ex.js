// exampleof call function
let name1 = {
    firstname:"kiran",
    lastname:"kamal"
}

let printFullName1 = function(city , state, country) {
    return this.firstname + " " + this.lastname + " lives in " +city + ", " +state + ", " + country
}

//console.log(printFullName1.call(name1,"Chandigarh","Punjab","India"));