// FOR EACH LOOP (High Order Function) -> arr.forEach(val, index, arr)
const coding = ["cpp", "java", "js", "python", "ruby", "swift"];
coding.forEach( function(val) {
    // console.log(val);
} )

coding.forEach( (val) => {
    // console.log(val);
} )

// function print(val) {
//     console.log(val);
// }

// USING FOR EACH ON ARRAYS
const print = (val, index, arr) => {
    console.log(val, index, arr);
}

// coding.forEach(print)

// USING FOREACH ON OBJECTS
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "Js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {  // item here refers to myCoding
    // console.log(`${item.languageName} : ${item.languageFileName}`)
} ) 

// ForEach function - does not return value - undefined
const languages = ["cpp", "java", "js", "python", "ruby", "swift"];
const values = languages.forEach( (item) => {
    // console.log(item);
    return item;
} )

// console.log(values);