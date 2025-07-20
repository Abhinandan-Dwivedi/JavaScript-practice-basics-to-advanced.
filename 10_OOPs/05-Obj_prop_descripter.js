console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
// output :
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// writable:
// This attribute determines whether the value of the property can be changed.
// enumerable: false
// This attribute controls whether the property will show up when enumerating the object's properties (e.g., using for...in loops or Object.keys()).
// configurable: false
// This is a crucial attribute that determines how much you can modify the property's descriptor itself, or delete the property.
// false means:
// You cannot delete the Math.PI property from the Math object.
// You cannot change any of its attributes (e.g., you cannot change writable to true, or enumerable to true). 
// The only exception is if writable was initially true, you could change it to false. But since writable is already false for Math.PI,
//  this exception doesn't apply


// Object.defineProperty(Math , "PI" , {
//     enumerable : true                     //  Cannot redefine property: PI
// })    
 
obj = {
    name : "kundan",
    id : 97
}
let l = Object.getOwnPropertyDescriptor(obj , 'name');
console.log(l);

 Object.defineProperty(obj , 'name', {
    // enumerable : false                  
}) 

for (const [key , value] in obj) {
     console.log(`${key} : ${value}`);
    
}