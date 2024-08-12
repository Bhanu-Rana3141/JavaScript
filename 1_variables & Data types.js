/* 

* JS is used to add functionality in web document
* single threading language - processing 1 cmd at a time
* JavaScript is a dynamically typed language – no need to specify data type of variables, the interpreter itself identifies the data type of variable
* google chrome uses V8 engine
* created by netscape , names : mocha - liveScript - javaScript
* can be used to create mobile apps, websites, networking apps, games

* console - window used to print data

# VARIABLE - named memory location used to store value
let a = 'hello' -> string literal
let a = 5       -> number literal
let a = true    -> boolean literal


Q. Difference between NULL and UNDEFINED ?
* NULL – knowing that no value is stored
    a = NULL;
    data type - object
* UNDEFINED – don’t know what value is stored in variable
    b = undefined
    data type - undefined


# WAYS TO DECLARE VARIABLES
const, let, var

accountCity = "Rajpura"
const accountId = 144345;
let accountEmail = "bhanu@google.com"
var accountPassword = "12345"
let accountState; // undefined

accountId = 45 -> const can't be updated
accountEmail = "rana@123"
accountPassword = "980"
accountCity = "Karnal"

console.table([accountId, accountEmail, accountPassword, accountCity]);

Q. Why var is not used for declaring variables ?
VAR -> is a global scope variable and get's changed if updated inside or outside of scope, which is not considered to be a good practice. Therefore in 2015 new version of js ES6(ecma script was introduced)
ECMA - is an organisation which set some standard to be followed by developers

//  *********************************** DATA TYPES **************************************************

**** PRIMITIVE  -> 7 types
number   
bigint -> 123456788987n    -> type undefined
string 
boolean
NULL    -> type object
undefined -> type undefined

symbol ->  type symbol     ->   used for uniqueness EXAMPLE - ID
const id = Symbol(123)
console.log(typeof id)

**** NON PRIMITIVE (reference type)
objects
arrays
functions -> type function but called as object function

*/


/* *********************************** COMPARISON OPERATIONS *********************************
let score = 33
console.log(typeof score)
console.log(typeof (score)) // method

let booleanNumber = Boolean(score)  // Boolean is a inbuilt function , which takes a argument FOR EX - SCORE , it will evaluate the value of score and return true or false
console.log(booleanNumber);
console.log(typeof(booleanNumber))

let number = 33
let stringNumber = String(number)
console.log(typeof stringNumber);

"33abc" - NaN
"" - false
1 - true, 0 - false
"bhanu" - true

**************** FALSY VALUES
false.
0 (zero)
'' or “” (empty string)
null.
undefined.
NaN.


***************** 
== -> values are compared , if data types are different , firstly it do the type coersion 
=== -> strict check , values as well as data type should be same

******************************  NULL COMPARISON 
console.log(null > 0);  -> false
console.log(null == 0);
console.log(null >= 0);  -> true

IN CASE OF UNDEFINED COMPARISON , FALSE WILL BE RETURNED IN EACH CASE MENTIONED ABOVE

Equality check == and comparison operators > < >= <= works differently . Comparison operators converts NULL in number 0 
*/


/* ********************************** OPERATIONS ************************************************
let firstName = "Bhanu"
let lastName = " Rana"
console.log(firstName + lastName)


//  BAD PRACTICE
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(3 + 4 * 5 % 3)
*/

