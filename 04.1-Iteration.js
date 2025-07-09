// in foreach mehtod we can not return any thing 
// return using filter method

let arr  = [1,2,9,7,6,5];
let values = arr.filter((num) => {
    console.log(num);
    return num > 5;
})
// console.log(values)

let m = arr.filter( val => val + 10 ); console.log(m); //  filter is used for conditions 

// use of map method and their chaining 
let n = arr.map(num => num *4).map(num => num + 10).filter(num => num > 30);
// console.log(n);

// ------------------------------ reduce ---------------------------
// Think of it as accumulating or combining all the elements into one final result.
// array.reduce(callback, initialValue)
// callback function is called for each element
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);   
console.log(sum); //  15`