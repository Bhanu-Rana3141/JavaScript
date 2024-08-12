// Singleton - when a object is created from constructor , then it is a singleton object
// Object.create()

// object literal - {}

const mySym = Symbol("key1")

// HERE KEYS ARE STRING BY DEFAULT
const jUser = {
    name : "hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym] : "key1", // type - string
    age : 18,
    location : "jaipur",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}


// console.log(jUser);
// console.log(jUser.name);
// console.log(jUser["full name"]);
// console.log(jUser[mySym]);

// jUser.email = "hiteshChoudhary@chatgpt.com" // overwriting value
// Object.freeze(jUser) // locking value - after locking value further value in jsUser can't be overwritten
// jUser.email = "hiteshChoudhary@microsoft.com" 

// console.log(jUser);


jUser.greeting = function() {
    console.log("hello js user");
}

jUser.greetingTwo = function() {
    // console.log("hello js user", jUser.name);
    // `` -> string interpolation 
    // this -> used to refer current object
    console.log(`hello js user ${this.name}`);
}

// console.log(jUser.greeting);
// console.log(jUser.greeting());
// console.log(jUser.greetingTwo());