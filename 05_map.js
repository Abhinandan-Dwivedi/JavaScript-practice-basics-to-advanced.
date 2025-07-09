const  mp = new Map();
// key would be any data type
mp.set("java" , "script");
mp.set(1 , "DSA");
mp.set( true , "AI");

const user1 = { id: 1, name: "Alice" };
const user2 = { id: 2, name: "Bob" };
mp.set(user1 , "loged in");
mp.set(user2 , "loged in");

// console.log(mp);     

//  Getting values with .get(key) 
console.log(mp.get(1));
console.log(mp.get(true));

// deletin with .delete()
console.log(mp.delete(user1));
console.log(mp);

// Checking existence with .has(key)
console.log(mp.has(user1)) // false 

// for (const i in mp) {
//     console.log(i);    // did not print anything
// }

// array of key values 
// for (const i of mp) {
//     console.log(i);       
// }
// console.log(mp.keys());   // map into object 

// keys  only 
// for (const i of mp.keys()) {
//     console.log(i);      
// }

// console.log(mp.values());  // it will print mao of iterator not an Array
// values only 
// for (const i of mp.values()) {
//     console.log(i);      
// }

// for the key values pair 
// for (const [key , value] of mp) {
//     console.log(key + " " + value);    //  print key value 
    
// }
