let div = document.querySelector('div')
// console.log(div.getAttribute('id'));
// console.log(div.getAttribute('class'));

let para = document.querySelector('p')
// console.log(para);
// console.log(para.getAttribute('id'));
// console.log(para.getAttribute('class'));
// para.setAttribute('class' , 'newClass')
// para.setAttribute('name' , 'bhanu')


div.style.backgroundColor = 'red'
div.style.width = '100px'
div.style.height = '300px'
div.style.color = 'white'

// let style = document.querySelector('div').style 
// console.log(style);

let newBtn = document.createElement('button')
newBtn.innerText = 'Click Me!'
console.log(newBtn);

// div.append(newBtn)
// div.prepend(newBtn)
// div.before(newBtn)
div.after(newBtn)

para.remove()