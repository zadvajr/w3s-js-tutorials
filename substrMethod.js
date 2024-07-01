//substr() method is similar to slice() the only the difference
// is that instead of specifying the start and end argument,
// the second argument specifies the length of the string to be extracted.

let fruits = "Apple, Banana, Kiwi";
let favouriteFruit = fruits.substr(0, 5); //returns "Apple"
console.log(favouriteFruit);