new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log(' Async one is resolved ');
        resolve();
    }, 1000);
}).
then(e =>{
    console.log("after Async one");
})

// // passing data and reject 
// new Promise(function(resolve , reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error)
//         resolve({username : "kundan" , id : 12311097});
//         else{
//             reject("Error : somthing went wrong");
//         }
//     }, 1000);
// }).
// then(e =>{
//     // console.log(e.username);
//     return e.username;
// }).
// then(e=>{
//     console.log(e);
// }).
// catch(error=>{
//     console.log(error);
// })

// async await 
let promisethree = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = true;
        if(!error)
        resolve({username : "Async" , id : 12311097});
        else{
            reject("Error : error has gone");
        }
    }, 1000);
})
async function promisethreeSync() {
    try{
    let l = await promisethree;
    console.log(l.username);
    }
    catch(error){
        console.log(error);
    }
} ;
promisethreeSync();

// fetch 
async function fetchdata() {
    try{
    let l = await fetch('https://api.github.com/users/Abhinandan-Dwivedi')
    let data = await l.json()
    console.log(data);
    }
    catch(error){
         console.log(error);
        }
    

}
// fetchdata();

// using .then 
fetch('https://api.github.com/users/Abhinandan-Dwivedi').
then
(response =>{
    return response.json();
}).
then(data =>{
    console.log(data);
}).
catch(error =>
{
    console.log(" this an error message" , error);
})