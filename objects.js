// Deep clone object (recursive)

const original = {
    name: "John",
    address: {city:"Chandigarh"}
}

function performDeepClone(value) {
    if(value === null || typeof value !== "object") {
        return value;
    }
    
}

performDeepClone(original);
