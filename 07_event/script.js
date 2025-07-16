let img = document.querySelector('.image');
// img.addEventListener('click' , function(e){
//     alert( 'this is outer file ');
    
// } , false);   // false is for bubble propagation (inner to outer )

let innerimg = document.querySelector('#gbli');
// innerimg.addEventListener('click' , function(e){
//     alert("this is a inner img")
//     e.stopPropagation(); // work only it event , prevents other outer event on it 
// } , false);

//  Event Delegation
// img.addEventListener('click' , function(e){
//     let c = e.target.tagName;
//     if( c == 'IMG'){
//         c = e.target.parentNode;
//         c.remove();
//     }
// })

// Temporarily disable an event handler.
function fun(){
    alert("this is temporary event ");
    innerimg.removeEventListener('click' ,fun);
}
innerimg.addEventListener('click' , fun);
 
// to prevent default action 
// element.preventDefalult();

