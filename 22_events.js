/* WAYS TO HANDLE EVENT
1. inline handling -> code becomes bulky
2. external js file -> only 1 work can be done on event
3. eventListner -> multiple works can be done on 1 event


let btn1 = document.querySelector('#btn1')
btn1.onclick = () => {
    console.log('clicked');
}

let btn2 = document.querySelector('#btn2')
btn2.ondblclick = () => {
    console.log('clicked 2x')
}

let div = document.querySelector('div')
div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
}
*/

/* EVENT LISTENER
btn1.addEventListener('click' , () => {
    console.log("handler 1");
})

btn1.addEventListener('click' , () => {
    console.log('handler 2');
})

let handler3 = () => {
    console.log('handler 3');
}

btn1.addEventListener('click' , handler3);
btn1.removeEventListener('click' , handler3)

btn1.addEventListener('click' , () => {
    console.log('handler 4');
})
*/

// toggle btn to change color
let btn = document.createElement('button')
btn.innerText = 'click me'
document.body.append(btn)

let color = 'white'
let colorHandler = () => {
    if(color === 'white') {
        document.body.style.backgroundColor = 'black'
        color = 'black'
    }
    else {
        document.body.style.backgroundColor = 'white'
        color = 'white'
    }
}

btn.addEventListener('click', colorHandler);
btn.addEventListener('mouseover', colorHandler);