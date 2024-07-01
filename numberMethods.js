//Number Methods

//The toString() method converts numbers to string

let x = 123;
console.log(typeof(x));
let y = x.toString();
console.log(typeof(y));

//toExponential() method
let c = 300000000;
console.log(c.toExponential());
let pi = 22 / 7;
console.log(pi.toExponential());

//toFixed() method
let z = 9.656;
console.log(z.toFixed(0));
console.log(z.toFixed(1));
console.log(z.toFixed(2));
console.log(z.toFixed(3));
console.log(z.toFixed(4));

//toPrecision() method
let n = 9.656;
console.log(n.toPrecision());
console.log(n.toPrecision(1));
console.log(n.toPrecision(2));
console.log(n.toPrecision(3));
console.log(n.toPrecision(4));
