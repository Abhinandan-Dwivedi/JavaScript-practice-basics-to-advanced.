// there is no need to specify data type in fun parameter 

function multiply2num(num1 , num2)
{
    if (typeof num1 == "number" && typeof num2 == "number")
        return num1 *num2;
     
    return  ;
      
}
// console.log(multiply2num());//  NaN // for null argument there is need to check the type of parameter 
// console.log(multiply2num(5 ,4));

function addtowonumber( num1 = 9 , num2 = 7) // if we didn't pass number then it takes it as default value 
{
    console.log(num1 + num2);
    return ;

}
// addtowonumber(5 , 8);
// addtowonumber();

// rest operator 
function calculatetotalprice( val1 , ...values)
{
    console.log(val1 , values);
}
calculatetotalprice(400 , 55 , 800 ,900);