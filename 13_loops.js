// for(let i = 1; i<=10; i++) {
//     console.log(`outer loop : ${i}`);
//     for(let j = 1; j<=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


// MAP 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('FR', "France")

// console.log(map);

// for(const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }

// for in loop can't be used on map


const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`);
}

const arr = [10,20,30,40,50];
for (const key in arr) {
    // console.log(arr[key]);
}





