let arr = [250, 645, 300, 900, 50]
console.log(arr);

for(let i = 0; i<arr.length; i++) {
    arr[i] -= arr[i] / 10; 
}
console.log(arr);


let companies = ['Bloomberg' , 'microsoft' , 'uber' , 'google' , 'ibm' , 'netflix']
companies.shift()
companies.splice(1, 1, 'ola')
companies.push('amazon')
console.log(companies);