let a  = 5;
var x = 8;

function display()
{
    console.log(x);   // var scope is everywhere
    x = 4;
    console.log(x); 
    //console.log(a); // it gives an error because  you have declayed a locally
    let a = 9;
    console.log(a);   //it will print 9 local scope 

}
// display();
// console.log(a); // 5
// console.log(x); // 4 // because var has no restriction it can be used everywhere ( local , block and globle)

// ++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++

funtoadd(4); // here we can call function
function funtoadd( num)
{
    console.log(num + 2);
}

// expression 
// expnum(4); // ReferenceError: Cannot access 'expnum' before initialization ( because storing num in variable )
const expnum  = function(num)
{
    console.log(num + 5);

}
expnum(4);
