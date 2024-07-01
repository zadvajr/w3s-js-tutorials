//when you create a string with string constructor it returns a string object.
//not a string primitive

//string primitive type
const name = "Daniel Zadva Jnr";
console.log(typeof name); // Outputs: string

//string object type

const course = new String("Introduction to JavaScript");
console.log(typeof course); // Outputs: object

//converting string object to primitive
console.log(course); // Outputs: [String: 'Introduction to JavaScript'] which is a string object

const stringPrimitive = course.valueOf();

console.log(stringPrimitive); //Outputs: Introduction to JavaScript

//end
