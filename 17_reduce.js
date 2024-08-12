let arr = [1, 2, 3, 4];

const output = arr.reduce( (res, val) => {
    return res + val;
});

console.log(output);


const largest = arr.reduce( (prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(largest);


// const myNums = [1, 2, 3]

// accumulator is used as a variable, for ex : here it stores sum of all arr elements
// if acc is initialised = 0, acc curr value starts from index 0 , but in case acc is not initialised then acc will have arr index 0 value as its starting value, and curr will have index 1 value

// const myTotal = myNums.reduce( function(acc, curr) {
//     console.log(`acc : ${acc}, curr : ${curr}`);
//     return acc + curr;
// }, 0 )
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, curr) => (acc + curr), 0 );
// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(priceToPay);