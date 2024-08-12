/* CALLBACK FUNCTIONS - when nesting of callback function increases a pyramid structure is formed called Pyramid of Doom , so that is called callback hell

// function hello () {
//     console.log("hello");
// }
// setTimeout(hello, 2000);

// setTimeout( () => {
//     console.log("hello");
// } , 4000 );


const hello = () => {
    console.log("hello");
}
setTimeout(hello , 3000)


// function getData(dataId) {
//     setTimeout(() => {
//         console.log(`data ${dataId}`);
//     }, 2000);
// } 

// getData(11)
// getData(12)
// getData(13)

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log(`data ${dataId}`);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2)
})
*/

/* PROMISES - to solve callback hell problem
// let promise = new Promise((resolve , reject) => {
//     console.log("I am Promise");
//     resolve("accepted");
// })

// const getPromise = () => {
//     return new Promise((resolve , reject) => {
//         console.log("I am promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// })

// function async() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// // promise chaining is used 
// console.log("fetching data1 : ");
// let p1 = async();
// p1.then((res) => {
//     console.log("fetching data2: ");
//     let p2 = async2();
//     p2.then(() => {});
// });

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`data ${dataId}`);
//             resolve("success");
//         }, 2000);
//     });
// }

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })

// BUT PROMISES ARE ALSO DIFFUCULT TO UNDERSTAND SO ASYNC-AWAIT IS USED
*/


// ASYNC AWAIT - used to make asynchronous programming easy

// function api() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         } , 2000);
//     });
// async function getWeatherData() {
//     await api();
//     await api();
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data ${dataId}`);
            resolve("success");
        }, 2000);
    });
}

// async-await ko alag function m daalna pada , unnecessary function call 
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

// using IIFE - code will be executed immediately but can't be used again , to use again code has to be written again
(async function() {
    await getData(1);
    await getData(2);
    await getData(3);
})();