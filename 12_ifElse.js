/*
In switch statement if any case gets executed and break keyword is not written afterit, in that case whole part of code in its bottom will be executed until it encounters a break statement, if it does'nt encounter with break keyword whole part in its bottom will be printed excepth default
*/

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined 


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 -> if value is present then value will be returned else null
// val1 = undefined ?? 15 -> if value return value , else undefined
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

/* false == 0 -> true
    false == "" -> true
    0 == "" -> true
*/