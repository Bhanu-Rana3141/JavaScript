/* Array declaration simply , and using constructor function
const myArr = [1,2,3,4,5]
console.log(myArr);

const myArr2 = new Array(5,6,7,8) 
// Firstly here myArr2 was variable, and by using new keyword it became a instance , object of Array constructor function
console.log(myArr2);
console.log(myArr2[0]);
console.log(typeof(myArr2));

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr);
*/

/* arr.slice() and arr.splice()

// const newArr1 = arr.slice(1, 3)
// console.log("new Array1 : " ,  newArr1);
// console.log("arr : " , arr);

// original array will be changed   -> arr.splice(starting index, no of elements to be deleted, elements to be inserted)

// const newArr2 = arr.splice(1,3)
// console.log("new Array2 : " , newArr2);
// console.log("arr : ", arr);

*/

/*  Adding Arrays - arr.push(), arr.concat(), spread

const marvel_heros = ["thor", "Ironaman", "Spiderman"]
const dc_heroes = ["superman", "flash", "Batman"]
// marvel_heros.push(dc_heroes)
// console.log(marvel_heros[0]);
// console.log(marvel_heros[1]);
// console.log(marvel_heros[2]);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);


// push - add dc_heros as 3rd element in marvel_heros
// marvel_heros.push(dc_heroes)
// console.log(marvel_heros);

// concat - add 2 arrays and return a new array
// const allArrays = marvel_heros.concat(dc_heroes)
// console.log(allArrays);


/* SPREAD OPERATOR - used to copy or concat values
is used with iterables objects like arrays
It can be used with strings, therefore string will be converted into array

// SPREAD OPERATOR
// let allHeros = [...marvel_heros, ...dc_heroes]
// console.log(allHeros);

const number = 42;
const spreadNumber = [...String(number)]; // Convert number to string and then spread
console.log(spreadNumber); // Output: ["4", "2"]
*/

/*  arr.flat()

// const anotherArray = [1, 2, 3, [4 ,5 ,6], 7, [6, 7, [4, 5]]]
// console.log(anotherArray);

// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

***
const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, [6, 7]]

In this example, nestedArray contains nested arrays. Calling flat() on nestedArray removes one level of nesting, resulting in a single flat array [1, 2, 3, 4, 5, [6, 7]].
*** 


***
const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArrayDepth2 = nestedArray.flat(2);

console.log(flattenedArrayDepth2); // Output: [1, 2, 3, 4, 5, 6, 7]

Here, flat(2) flattens the array to a depth of 2, removing two levels of nesting. As a result, the nested arrays [3, 4] and [6, 7] are both flattened, resulting in [1, 2, 3, 4, 5, 6, 7].
***

***
const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray); // Output: [1, 2, 3, 4]
n this example, nestedArray contains nested arrays with multiple levels of nesting. By passing Infinity as the argument to flat(), it recursively flattens all levels of nesting until all nested arrays are flattened completely. As a result, the nested arrays [2, [3, [4]]] are all flattened, resulting in [1, 2, 3, 4].
***
*/

/*
// console.log(Array.isArray("Bhanu"));
Array refers to the built-in JavaScript constructor function for creating arrays. In this context, Array.isArray() is a static method of the Array object. It's used to check whether the provided value is an array or not.
So, in the expression Array.isArray("Bhanu"), Array is a reference to the array constructor function provided by JavaScript, and isArray() is a method belonging to that constructor function.


// console.log(Array.from("Bhanu"));
The Array.from() method in JavaScript creates a new array instance from an array-like or iterable object. It essentially converts an iterable object into an array and returns that array.

// console.log(Array.from({name : "rana"})); // will return empty array[] , here we have to explicity tell array to be created from keys or values

const obj = {name: "rana"};
const keysArray = Array.from(Object.keys(obj));
console.log(keysArray); // Output: ["name"]

const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray); // Output: ["rana"]


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.from(score1, score2, score3));

*** USAGE OF Array.from() AND Array.of()
In summary, you would use Array.from() when you want to create an array from an iterable object like a string, and you would use Array.of() when you want to create an array with a specific set of elements, regardless of the number or type of those elements.
*/
