//javascript substring() method is similar to sice() however, it does not support negative indexing
//if an index less than zero is specified it is assumed to be 0

let favouriteFruits = "Apple, Banana, Kiwi";

let choiceFruit = favouriteFruits.substring(0, 5);
console.log(choiceFruit);

//when second argument not specified, returns the rest of the string
console.log(favouriteFruits.substring(7)); // prints "Banana, Kiwi"

//when negative index is specified, 0 is assumed
console.log(favouriteFruits.substring(-30)); //prints the entire string