class user{
    constructor(username , password)
    {
        this.username = username;
        this.password  = password;
    }
    get password()
    {
        return  ` @ram${this._password.toUpperCase()}ram `;
    }
    set password(value)
    {
        this._password = value;
    }
}
const c = new user("kundan" , "radhe");
console.log(c.password); // encrypted password : @ramRADHEram
console.log(c._password); //  without encrypted : radhe