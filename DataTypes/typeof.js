// premitive data types : fundamental and Basic datatypes 
// string , number , Boolean , symbol , null , undefined , Bigint 

let x  = 5004040404040400400n; // BigInt 
console.log(typeof x);

let a = null;
console.log(typeof a); // object 

// Non premitive (Reference ) datatypes 
// Array , function , object 
let arr  = [ "kundan" , 5 , "dwivedi "];
console.log(typeof arr);

const f = function(){
    console.log(typeof f);
}
f(); // function (it is a object function )

let info  = {
    name:  "kundan",
    age : 20
};
console.log( typeof info)