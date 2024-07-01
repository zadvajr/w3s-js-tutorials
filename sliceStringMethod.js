//JavaScript methods to extract string parts

//slice() method extracts some parts of a string and return the extracted part.
// it takes 2 arguments, starting position and end position
let fruits = "Banana, Mango, Apple";

let favouriteFruits = fruits.slice(15, 20); //extracts "Apple"

console.log(favouriteFruits);

//if you left out the last argument, it extracts to the end
let favouriteFruits2 = fruits.slice(8); //extracts everything from Mango to the end
console.log(favouriteFruits2);

//Negative indexing
console.log(fruits.slice(-5)); // prints Apple