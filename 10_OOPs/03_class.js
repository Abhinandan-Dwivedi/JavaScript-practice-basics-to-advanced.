class user{
    constructor(username, id , mail){
        this.username = username;
        this.id = id;
        this.mail = mail;

    }
    name(){
        console.log(`user name is ${this.username}`);
    }
}
let newuser = new user("abhinandan" , 123 , "@bmail.com");
newuser.name();

// behind the seen 
function usertwo(username , id , email)
{
    this.username = username;
    this.id = id;
    this.email = email;
    return this;
}
usertwo.prototype.nametwo  = function(){
    console.log (` newuser name is ${this.username}`);      
}
let onee = new usertwo("kundan" , 23 , "@gmail.com");
onee.nametwo();

// inheritance
class  Name{
    constructor(username ){
        this.username = username;
    }
    name(){
        console.log(` the name is ${this.username}`);
    }
}
class ID extends Name{
    constructor(username ,id){
        super(username);
        this.id = id;
    }

    parent(){
    console.log(` name from parent ${this.username}`);
    }
    
}
const id  = new ID("KUNDAN" , 97);
id.parent(); 
id.name();
