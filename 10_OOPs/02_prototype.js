// adding custom method
//  in string
let s = "  kun dan  ";
// creating prototype for all strings 
String.prototype.truelength = function(){
    console.log(` true length is ${this.trim().length} `);
}
// s.truelength();

// object
Object.prototype.firstvalue = function(){
    let l =  Object.values(this)[0];
    return l;
}
let obj = {
    name : "abhinandan",
    id : 97
}
console.log(obj.firstvalue());

// inheritance 
let user = {
    isavailable : true
}
let abhi = {
    name : "abhinandan",
    id : 97
}
Object.setPrototypeOf(abhi , user);
console.log(abhi.isavailable);// true