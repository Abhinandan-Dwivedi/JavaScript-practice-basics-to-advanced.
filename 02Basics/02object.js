sym = Symbol("mysymbol");

// singleton 
// Has exactly one single instance in your code.
// Is created once, and you use that same instance everywhere.
//example of singleton obj : The most common way in JS is just creating an object literal:
let obj = {
    name : "kundan",
    [sym] : "sbj",
    age : 20,
    year : 3,
    mail : "kundna@gamil.com"

}

// values can be accessed in 2 ways 
// console.log(obj.name);
// console.log(obj["name"]) // key is stored as string in object

// How to access a Symbol in  Object
// console.log( obj[sym]) // sbj 
// console.log(obj.sym) // undefined

obj.college  = "iiit sonipat"; // it adds an extra key value pair in object
// console.log(obj.college);
// console.log(obj)

//Object.freeze(obj); // after this you can not change or add extra keys in object
obj.college  = "iit delhi";
//console.log(obj)

obj.myfunction = function()
{
    console.log(`it is a function and my name is ${this.name}`)
}
console.log( typeof obj.myfunction , obj.myfunction());// function , it is a function

