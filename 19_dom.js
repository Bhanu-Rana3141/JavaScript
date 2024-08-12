/*
HTML COLLECTION
getElementById() -> if id name is incorrect , in that case NULL value will be returned
getElementsByClassName() -> empty HTML COLLECTION is returned

querySelector -> returns NODELIST

Q. Difference b|w .log and .dir ?
.dir -> displays all the properties of object in tree like structure
.log -> displays message 

DOM HAS 3 TYPES OF NODES
- text node (first node in body by default)
- comment node
- element node (worked on)

Q. Difference b|w innerText and innerHTML ? BOTH USED TO GET AND SET VALUE
innerText -> prints the content inside tags
innerHTML -> prints content along with tags
*/

// let heading = document.querySelector('h2')
// console.log(heading.innerText);

// heading.innerText = `${heading.innerText} from apna college students`
// console.log(heading.innerText);

let divs = document.querySelectorAll('div')
console.log(divs);

for(let i = 0; i<divs.length; i++) {
    divs[i].innerText = `new text for div ${i}`
}
