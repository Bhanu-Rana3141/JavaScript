let btn = document.createElement('button')
btn.innerText = 'Click Me !'
btn.style.backgroundColor = 'red'
btn.style.color = 'white'
document.body.prepend(btn)


let para = document.querySelector('p')
console.log(para);
// para.setAttribute('class' , 'newClass')
para.classList.add('newClass')
para.classList.remove('newClass')