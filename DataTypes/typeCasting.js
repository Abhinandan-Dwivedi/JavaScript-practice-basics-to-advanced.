let x = 9;
x = String(x);
console.log(typeof x);

let s = "kundan";
s = Number(s);
console.log(s); // NaN (not a number )
console.log(typeof  s); // number 

let a = undefined;
console.log(a);
a = Number(a);
console.log( a); // NaN

console.log(" it's time for Boolean");
let b = 2;
b = Boolean(b);  
console.log(b);// number becomes true rather than zero

b = "kundna";
b = Boolean(b);
console.log(b); // nonempty string becomes true

b = Boolean(""); 
console.log(b) // empty string becomes false 