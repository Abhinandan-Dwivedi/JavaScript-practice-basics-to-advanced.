let name  = "kundan";
//if( name ) console.log("kundan") , console.log("Dwivedi");

// falsey vlues 
// ""  , false , 0 , null , nudefined , Bigint 0n , Nan

// truly values 
// " ", "0" , [] , {}  , function(){}

// condition check in array 
let arr = [3,4,5,6,7];
if ( arr.length == 0)
    console.log("arr is empty");
else console.log("array is not empty ");

// in an object you can change in an array 
let oobj = {}

if ( Object.keys(oobj).length)
    console.log("Object in existing");
else console.log("object is not existing");

// nullysh coalescing operator (??)!
let a;
a = 5 ?? 10; 
a  = null ?? 6;
a = null ?? null ?? 8;
console.log(a);

// ternary operator 
(true) ? console.log("condition is true ") : console.log("condition is wrong");

// switch cases 


let month = 3;
switch(month){
    case 1:
        console.log(" january ");
        break;
    case 2:
        console.log("february ");
        break;
    case 3:
        console.log("march");
         break;
    default: console.log("aprial");


}
let mont = "february";
switch(mont){
    case "january":
        console.log(" january ");
        break;
    case "february":
        console.log("february ");
        break;
    case "march":
        console.log("march");
         break;
    default: console.log("aprial");


}

