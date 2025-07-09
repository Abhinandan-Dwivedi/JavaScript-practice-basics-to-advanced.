let arr = [4,5,6,7,8,9,0];   
// for (const i of arr) {
//     console.log(i);        // it prints vlaues of an array
// }
// for (const i in arr){
//     console.log(i)          // it prints the index of an array
// }

let obj = {
    name : "kundan",
    age : 20
}

// for (const i of obj) {  // object is not iterable
//     console.log(i);
// }

// for (const i in obj) {
//      console.log(i);    // key of object 
// }


// ++++++++++++++++++++++++++++++ for each loop in array  ++++++++++++++++++++++++++++++++++++++
 
arr.forEach( val => {
      console.log(val);
});
 
arr.forEach(function (val){
    console.log(`the value of array is ${val}`);
})

arr.forEach((val , ind , aee) =>{
    console.log(`the vlaue : ${val} , index ${ind} , array is ${aee}`);
})

// also can appaly buildin function 
function itration(val)
{
    console.log(val)
}
arr.forEach(itration);