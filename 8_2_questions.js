// function countVowels(str) {
//     let cnt = 0;
//     for(let val of str) {
//         if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') {
//             cnt++;
//         }
//     }
//     return cnt;
// }

let countVowels = (str) => {
    let cnt = 0;
    for(let val of str) {
        if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') {
            cnt++;
        }
    }
    return cnt;
}

console.log(countVowels('abcde'))
