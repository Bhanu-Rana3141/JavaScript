// function loginMessage(username = "sam") {
//     if(username === undefined) {
//         console.log("username is undefined");
//     }
//     return `${username} just logged in`;
// }

// console.log(loginMessage("Bhanu"));
// console.log(loginMessage(""));
// console.log(loginMessage()); // undefined


//********** REST operator - return values in form of array
// function calculatePrice(val1, val2, ...num1) {
//     return num1
// }

// console.log(calculatePrice(100, 200, 300, 400));


//********** PASSING OBJECT IN FUNCTION
// const user = {
//     username : "Hitesh",
//     price : 199
// }

// function handleObject(anyobject) {
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username : "sam",
//     price : 200
// })


// ***** PASSING ARRAY IN FUNCTION
// function myArray(getarray) {
//     return getarray[1]
// }

// console.log(myArray([10,20,30,40]));

// SCOPE - global scope is different in node and browser
// CLOSURE - when child function can access parent variable


/* ***********  USING THIS KEYWORD -> this keyword refers to the current object for which the function is called
function Person(name, age) {
    console.log("value of this inside function 1" , this); // {}
    
    this.name = name
    this.age = age

    console.log("value of this inside function 2" , this);
}

let person1 = new Person("Bhanu", 20)
let person2 = new Person("Partap", 20)

// console.log(`My name is ${person1.name} and my age is ${person1.age}`);
// console.log(`My name is ${person2.name} and my age is ${person2.age}`); 

console.log("value of this" , this); // {}

*/ 