// IIFE - Immediately Invoked Function Expression

/*
- used to execute function immediately
- function should not be polluted by global variables
*/

// named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})(); // here function is called immediately and it don't know where to stop execution so ; has to be used


( () => { 
    console.log(`DB CONNECTED2`);
} ) ();


( (name) => { 
    console.log(`DB CONNECTED2 ${name}`);
} ) ("bhanu");