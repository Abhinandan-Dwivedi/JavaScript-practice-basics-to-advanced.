// initialization 
let x= 6;
console.log(x); // 6
let c = new Number(57);
console.log(c); // [Number : 57]

let a  = 89.751
console.log(a.toPrecision(3)) // 89.8

console.log(a.toFixed(4)); // after 4 decimal places (89.7510)
console.log(a.toString().length); // 6 

// +++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

console.log(Math.abs(-9));
console.log(Math.round(34.44))
console.log(Math.ceil(34.44))
console.log(Math.floor(0.44))
console.log(Math.max(34.44 , 6, 7, 8, 0))
console.log(Math.min(34.44 , 6, 7, 8, 0))
console.log(Math.random()); // from 0>  to  <1

let min = 50
let max =  200
let r = Math.random();
console.log(Math.floor ((200*r - 50*r) + 51) ) // it give from 50 to 200
