//indexOf() string method
//used to locate the position of a particular string
let text = "Please locate where 'locate' is!";
let index = text.indexOf("locate");
console.log(index);

let lastIndex = text.lastIndexOf("locate");
console.log(lastIndex);
//both of the functions returns -1 if the search is not found
let notFound = text.indexOf("Who");
console.log(notFound);
notFound = text.lastIndexOf("Who");
console.log(notFound);

//search()
console.log(text.search("locate"));

//match()
console.log(text.match("ea"));