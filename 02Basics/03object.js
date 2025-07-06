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
// console.log(objtoarr)
// console.log(Object.values(myobject6)); // gives an array of values

// to check that a key is existing in an array or not 
// console.log(myobject6.hasOwnProperty("email")); // true 

// destructuring the object 
const user = {
  name: "kundan",
  age: 25,
  country: "India"
};

const {name , age , country} = user; // “Create variables name, age, country, and assign them the values of the same-named properties from the object.”
// console.log(name); // here there is no need of user. repeatedly 
// console.log(age);
// console.log(country);

// Renaming Variables While Destructuring
const {name : myname , age : myage }  = user 
// console.log(myname , myage);

// Setting Default Values
 let car  = {
    brand : "toyota",
    
 }
 const { brand , color = "black"}  = car; // here we are using extra properties 
//  console.log(brand , color ); 

//  Destructuring in Function Parameters
function great({name , age })
{
    console.log(`my name is ${name} and i am ${age} years old`);
}
// great(user);

// when you fethch the data from api data comes in  JSON (Java script Object Notation)  format
// example of json 
// {
//   "name": "kundan",
//   "age": 20,
//   "country": "India"
// }
// it seems like an object but it is in string formate 