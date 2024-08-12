/*
// const student = {
//     fullName : "Bhanu Rana",
//     marks : 95,
//     printMarks: function() {
//         console.log(`marks = ${this.marks}`);
//     },
// };


// PROTOTYPE -> objects inherit properties and methods of another object using prototype. It is reference of object
const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
};

karanArjun.__proto__ = employee; // here prototype is providing reference of employee to karanArjun
*/


/* object creation using classes
class ToyotaCar {
    constructor(brand , mileage) {
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);
*/

/* INHERITENCE

EXAMPLE - 1
class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child();
*/

class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name); // parent class constructor is invoked , should be called before using this and exiting from child constructor
    }
    work() {
        super.eat();
        console.log("solve problems");
    }
}

let eng = new Engineer("bhanu");
