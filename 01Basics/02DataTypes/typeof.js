// premitive data types : fundamental and Basic datatypes (these stores in stack , provides as copy of data)
// string , number , Boolean , symbol , null , undefined , Bigint 

let x  = 5004040404040400400n; // BigInt 
console.log(typeof x);

let a = null;
console.log(typeof a); // object 

// Non premitive (provided as Reference ) datatypes (these sotres in heap)
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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack allocation of data
let c  = " kundan";
let d = c;
d = "dwivedi";
console.log(c);
console.log(d)

// heap allocation of data 
let obj = {
    name : "kd",
    branch : "cse"
}
console.log(obj);

let obj2 = obj;
obj2.name = "dwivedi";
console.log(obj); // here obj and obj2 both name changed because both has allcated same heap memory 
console.log(obj2);


