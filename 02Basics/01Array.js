 let ar = [6,5,4,3,2,1];
// console.log(typeof ar); // object 
 let arr = new Array(4,5,6,7,8,9)
 console.log("original arr is " , arr ,typeof arr)

// console.log(arr.length)
// console.log(arr.push(0), arr)  // push pop in back of a array 
// console.log(arr.pop() ,arr);

// console.log(arr.shift() , arr); // pop front of array 
// console.log(arr.unshift(1) , arr); push the front of arr

// console.log(arr.slice(1 ,3)) // give an arr  = [5,6] and do not not change original array
// console.log(arr);
// console.log(arr.splice(1,3)); // give ar = [5,6,7] and change the original array 
// console.log(arr);

// console.log(arr.indexOf(5));
// console.log(arr.includes(3)); // boolean value 

// let anotherarr = arr.concat(ar);
// console.log( anotherarr);  // to concatinate to  array 

let a = ["kundan  ", "dwivedi" , "INDIAN"];
// let anotherarr2 = [...arr , ...ar , ...a] // here we can spread more than two arrays in an array , it does not change original array 
// console.log(anotherarr2);

// converting 2D 3D ...(multidimention array) array into 1D array 
// let multiDarr = [3,4,[4,[5,6]], 6 , 0 ,4];  
// console.log(multiDarr.flat(Infinity));  // it does not changee original array 
// console.log(multiDarr);

console.log(Array.from("kundan"));
console.log(Array.from(96969)); // it give empty array means that it does not convert it into an array 
console.log(Array.of(1,1,2,2,1,1,2,)); // here we can take multiple variables to make an array  
console.log(Array.isArray("kundna")); // false 
console.log(Array.isArray(a)); // true