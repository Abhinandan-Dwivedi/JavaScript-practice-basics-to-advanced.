let inputnum;
const attempt = document.querySelector('#attemts');
const resultar = document.querySelector('#Resultarr');
const re = document.querySelector('.result');
let arr = new Array();
let input  = document.querySelector('#ipnum');
const submit = document.getElementById("midsub");

submit.addEventListener('click' , function(e){
    inputnum = parseFloat(input.value);
    if(!isNaN(inputnum)){
    input.value = "";
    arr.push(inputnum);
    let a = 10 - arr.length;
    attempt.textContent  =  a; 
    resultar.textContent = arr;
    re.textContent = "";
    if( arr.length == 10) 
        display(arr);
}
})

function display(arr) {
    let rnum = Math.random();
    rnum = Math.floor( rnum*100 +1);

    let found = false;
    arr.forEach(e => {
        if (e === rnum) {
            re.textContent = `You have guessed right and you won! The number is ${rnum}`;
            found = true;
        }
    });
    if (!found) {
        re.textContent = `Your guess is wrong. The number was ${rnum}`;
    }
    arr.length = 0;
}

