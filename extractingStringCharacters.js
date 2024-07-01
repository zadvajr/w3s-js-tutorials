//extracting string characters

//charAt() methods returns character at the specified index
let name = "Daniel Zadva Jnr";
let initial = name.charAt(0);
console.log(initial);

//charCodeAt returns unicode-16 code for a character at index specified
let initialCode = name.charCodeAt(0);
console.log(initialCode);

//property access
let fullInitial = name[0] + name[7] + name[13];
console.log(fullInitial);