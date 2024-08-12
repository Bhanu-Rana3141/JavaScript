// map return values

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = numbers.map( (num, index, arr) => {
    console.log(`num : ${num} , index : ${index}, arr : ${arr}`);
    return num + 10;
} )
console.log(newNums);

// const newNums = numbers.map( (num) => (num + 10) )
// console.log(newNums);


//  SAME USING FOREACH
// const newNums = []
// numbers.forEach( (num) => (newNums.push(num + 10)) )
// console.log(newNums);


// CHAINING
// const newNums = numbers
//                 .map( (num) => (num * 10) )
//                 .map( (num) => (num + 1) )
//                 .filter( (num) => (num > 40) )
// console.log(newNums);