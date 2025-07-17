let m  = document.querySelector('.main');
let start = document.querySelector('.start');
let stop  = document.querySelector('.stop');
let time = document.querySelector('.time');
let  i ;

  function colr(){
    let h = "0123456789ABCDEF";
    let c = "#";
    for(let j = 0; j<6; j++)
    {
        c = c + h[Math.floor(Math.random()*16)];
    }
    return c;
}
start.addEventListener('click'  , function(){
    if( !i ){
        i = setInterval(() => {
        m.style.backgroundColor  =   colr();
        },  1000);
    }
})

stop.addEventListener('click' , function(){
    clearInterval(i);
    i= null;
})