//trim() string method
//it removes whites from both sides of the string

let text = "     Text with white spaces         ";
console.log("Before trim");
console.log(text);

let trimedText = text.trim();
console.log("After trim");
console.log(trimedText);

let trimStart = text.trimStart();
console.log(trimStart);

let trimEnd = text.trimEnd();
console.log(trimEnd);