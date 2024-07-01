//The String.fromCharCode() Method
//this method creates a string from unicode values

const letters = String.fromCharCode(65,66,67,68,69,70);

console.log(letters); //Outputs: ABCDEF

const specialString = String.fromCharCode(9829, 9786, 8482);
console.log(specialString); // Output: ♥☺™

const unicodeValues = [72, 105, 33];
const dynamicString = String.fromCharCode(...unicodeValues);
console.log(dynamicString); // Output: Hi!