const  btn  = document.querySelectorAll('.a');
const bd = document.querySelector('body');
btn.forEach( (val) =>{
    val.addEventListener( 'click' , function(e){
        bd.style.backgroundColor = e.target.id;
        if(bd.style.backgroundColor == 'black') bd.style.color = 'white';
    } )
})