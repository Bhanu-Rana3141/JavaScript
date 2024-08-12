// this -> keyword refers to current context
// console.log(this); -> {} , because the current context is empty in NODE environment, but in BROWSER it will print window - a global object

// WE CAN'T PRINT ANYTHING IN OBJECT
// const user = {
//     username : "Bhanu",
//     age : 20,

//     welcomeMsg : function() {
//         // console.log(`${this.username} , welcome to code`);
//         console.log("this -> " , this);
//     },

//     arrowMsg : () => {
//         console.log(this);
//     }
// }

// user.welcomeMsg()
// user.arrowMsg()
// user.username = "Partap"
// user.welcomeMsg()


// NORMAL FUNCTION
// function chai() {
//     console.log(this);
//     let username = "hitesh"
//     console.log(this.username); // this is used in OBJECTS
//     console.log(this);
// }

// chai()


// ARROW FUNCTION
// const addTwo = (num1, num2) => {
//     console.log(this);  // this -> returns {}
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));


// IMPLICIT RETURN - no need to use return keyword
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3,5));


// if {} -> return keyword must be used, () -> avoid return keyword

// const arrowFunction = () => {
//     console.log(this);
// }
// arrowFunction();



// STRICT MODE - inside any object
// NON - STRICT MODE - global scope

/*
this behaviour in Arrow function -

Inside strict and non - strict mode
in browser - window object
in node Envirnonement - {}


this behaviour in Normal function -

NON STRICT MODE - Browser , node environment - global object
STRICT MODE - Browser, node environment - current object context
*/
