// JavaScript has 8 Datatypes mainly 
// 1 number 
// 2 string 
// 3 boolean 
// 4 null : its type of is object 
// 5 undefined 
// 6 object
// 7 Bigint
// 8 Symbol 

// let can hold any type of data 

let x = null;
console.log(typeof(x)); // object 

let u;
console.log(typeof(u)); // undefined

// Numbers can be written with, or without decimals: (64-bit floating-point numbers)
let n =  3;
console.log(typeof(n)) // number 

// Built-in object types can be:
// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
const person = {firstName:"John", lastName:"Doe"}; // {key , value}
console.log(person.firstName); 

//  if either operand is a string. then String concatenation 
let a = 5 + "kundan";
console.log(a); // 5kundan (type of string )

// but here solved left ot right 
let b = 6 + 4 + "kundan"; 
console.log(b) // 10kundna ( string)

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let d = "r";
d  = 3;
d = "kundan";
console.log(d); // kundan 