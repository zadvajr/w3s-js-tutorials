//using the arguments objects in javascript
//this funtion accepts any number of input as argument and outputs the sum

function sum(separator) {
    
    let result = 0;
    
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(sum(12, 10, 23));