// new constructor 
function user(username , id , email)
{
    this.username = username;
    this.id = id;
    this.email = email;
    return this;
}
// let one = user("kundan" , 23 , "@gmail.com");
// let two = user("abhi" , 12 , '@mai.com');
// console.log(one.username); // two is overwriting , ther is only one copy is created of user 

// creating custom prototypes 
 user.prototype.increment  = function(){
    this.id = this.id + 2;
    console.log(" increment is done "); 
}

// new creates a instance of user 
let onee = new user("kundan" , 23 , "@gmail.com");
let twoo = new user("abhi" , 12 , '@mai.com');   
// console.log(onee.username);  // here twoo is not overriding 
// console.log(onee.id);
// onee.increment();
// console.log(onee.id);
