let m  = document.querySelector('.main');
let start = document.querySelector('.start');
let stop  = document.querySelector('.stop');
let time = document.querySelector('.time');
let i ;

start.addEventListener('click'  , function(){
    i = setInterval(() => {
    let t = new Date();
    time.innerHTML = t.toLocaleString();
},  1000);
})

stop.addEventListener('click' , function(){
    clearInterval(i);
})