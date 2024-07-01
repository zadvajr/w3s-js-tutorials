//template literal can also be used with a function known as tag functions
//allowing for more advanced string processing
//the function receives the string part and the values as separate arguments

function customTag(strings, ...values) {
    let result = '';

    for(let i = 0; i < strings.length; i++) {
        
        result += strings[i];

        if(i < values.length) {
            result += values[i];
        }

    }

    return result;
}

const name = "Daniel";
const age = 35;

const taggedResult = customTag`My name is ${name} and I am ${age} years old.`;

console.log(taggedResult);

