// Immediately Invoked Function Expression
// An IIFE is a function that runs as soon as it is defined.
// Anything declared inside won’t leak into the outer scope.
// ()();

(function immediate( ){
    console.log("kundna");
})();

( () => {
    console.log("it is inside arrow function");
}) ();

// passing parameters 

(function immediate(num1 , num2 ){
    console.log( num1+ num2);
})(4 ,5);
