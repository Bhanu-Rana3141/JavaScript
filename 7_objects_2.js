// const tinderUser = new Object(); returns {} -> SINGLETON OBJECT

// const tinderUser = {};

// tinderUser.id = "123abc"
// tinderUser.name = "sam"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);


/*
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstName : "hitesh",
            lastName : "choudhary",
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstName);
console.log(regularUser.fullname.userfullname.lastName);

*/

/* CONCATINATING OBJECTS

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

const obj3 = { obj1, obj2 } // here obj1 , obj2 will be stored as 2 elements of obj3
console.log(obj3); 


// ASSIGN
// Object.assign(target, src) - it copies values from objects and return a object

// const obj3 = Object.assign(obj1, obj2);   // here obj2 value will be concatenated in obj1
// console.log(obj3);   
// console.log(obj1);
// console.log(obj1 === obj3);

// const obj3 = Object.assign({}, obj1, obj2);  // here value will be stored in  target object
// console.log(obj3);
// console.log(obj1);
// console.log(obj1 === obj3);

// SPREAD OPERATOR
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj3 = {...obj1 , ...obj2};
console.log(obj3);

*/

// VALUES WILL BE RETURNED IN FORM OF ARRAY
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// let course = {
//     coursename: "js",
//     price: "999",
//     courseInstructor: "Hitesh"
// }

//  DESTRUCTING OBJECT
// const {courseInstructor : instructor} = course;
// console.log(instructor);
