const user = {
  name: "kundan",
  age: 25,
  country: "India",
  userinfo : function(){
             console.log(`${this.name}, wlcome man to this tutorial`);
  }
};
//user.userinfo();

// console.log(this); // will give an empty object
function useofthis()
{
    console.log(this);
}
// useofthis();  // In a browser (non-strict mode):
              // this will refer to the global object, which is window.
              //  In Node.js (non-strict mode) in this situation:
              //  this will refer to the global object, which is global.
// arrow function 
let arofun = () =>{
  console.log(this);
}
arofun(); // { } ( an empty object)

// One parameter (no need for parentheses):
let onePara = name => {
  console.log(name);
}
onePara("kundan");

// f your function is just returning something, you can skip return and the braces:

// let add2num = (num1 , num2) => {
//    return num1 + num2;
// }
// console.log(add2num(6 ,7));
// or 
// let add2num = (num1 , num2) =>  num1 + num2;
// console.log(add2num(6 ,7));

let add2num = (num1 , num2) =>  (num1 + num2);
console.log(add2num(6 ,7));

// returning an object 
let robj = () => ( {name : "kundan" , age : 20});
console.log(robj());