// let arr = [87, 93, 64, 99, 86];
// const marks = arr.filter((mark) => mark > 90);
// console.log(marks);

let n = prompt("Enter n : ");
let arr = [];
for(let i = 1; i<=n; i++) {
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce( (res, curr) => {
    return res + curr;
} );
console.log(`sum : ${sum}`);

let product = arr.reduce((res, curr) => {
    return res * curr;
})
console.log(`factorial: ${product}`);