// initialization of string 
let s  = "kundan";
let st = new String("Dwivedi");
console.log(typeof s)      //string 
console.log(typeof st);    // object

// string interpolation 
console.log(`my name is ${s} ${st} and i am studing in iiit sonipat `) // this a good way to concatinate 
console.log("my mane is " + s + st + "and i am studing in iiit sonipat "); // this is not a good way 

// string methods 

s = "   kudan  ";
st = "   Dwivedi   ";
console.log(s.trim()) // removes beginning and ending whitespaces 
console.log(st.trim()) // removes beginning and ending whitespaces 

// here s and st did not change because these methods changing the copy of these variables 
console.log(s)
console.log(st)

console.log(s.length);

// character at a index 
console.log("wrist".charAt(0));

// first and last index of a substring
console.log("banana".lastIndexOf("a"))
console.log("Banana".indexOf("a"));

//  Check if a substring exists.
console.log("Banana".indexOf("t")); // out/p will come -1 that means substring is not exist in this string
// or
console.log("forntend Developer".includes("f")) ; // true

// Check if a string starts or ends with a given substring.
console.log("/api/users.c".startsWith("/api")); //true 
console.log("image.jpg".endsWith("jpg")); // true

