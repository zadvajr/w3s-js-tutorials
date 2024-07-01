//replace() method replaces specified value with another value

let text = "MICROSOFT Inc. is a software company started by Bill Gates it sales products like Microsoft Windows, Microsoft Excel MICROSOFT Power point and etc.";
let newtext1 = text.replace("Microsoft", "W3Schools"); // replaces the only first instances
console.log(newtext1);

let newtext2 = text.replace(/Microsoft/g, "W3Schools"); // Replaces all instances
console.log(newtext2);

let newtext3 = text.replace(/Microsoft/i, "W3Schools"); //Replaces insensitive
console.log(newtext3); 