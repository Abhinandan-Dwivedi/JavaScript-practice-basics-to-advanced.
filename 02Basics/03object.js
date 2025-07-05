// initialization using constructor 
let myobj  = new Object();
// console.log(myobj);

let myobject1 = {
    name : " kundan"
}
let myobject2 = {
    name : "Abhinandan",
    email : "@gasil,com"
}
let myobject3 = {
    name :  "dwivedi"
}

myobject1.age = 20
myobject1.id = 12311097;
 
let myobject4 =  { myobject3 , myobject1 , myobject2};
// console.log(myobject4); // there are objects inside a object 

let myobject5 =  Object.assign(myobject1 , myobject2 , myobject3); // if more than 1  obj has same key then last object key vlaue will be stored
// console.log(myobject5);  

let myobject6  =  { ...myobject1 ,...myobject2 , ...myobject3}; // spread method 
//console.log(myobject6)  // if more than 1  obj has same key then last object key value will be stored

let objtoarr=  Object.keys(myobject6); // make an array of kays
console.log(objtoarr)
console.log(Object.values(myobject6)); // gives an array of values

// to check that a key is existing in an array or not 
console.log(myobject6.hasOwnProperty("email")); // true 