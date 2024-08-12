// arr.filter( callback function ) -> returns value
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Way 1 
// const newNums =  nums.filter( (val) => {
//     // console.log(val > 4);  // in this case it will return true or false
    // return val > 4;  // EXPLICIT RETURN
// }) 

// way 2
// const newNums = nums.filter( (value) => (value > 5) ); // IMPLICIT RETURN
// console.log(newNums);  

// USING FOREACH FOR FILTERING
const newNums = []
nums.forEach( (value) => {
    if(value > 4) {
        newNums.push(value);
    }
} )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => {return bk.genre === 'History'})
//   let userBooks = books.filter( (bk) => ( bk.publish > 2000 && bk.genre === "Science") )
  let userBooks = books.filter((bk) => {
    return bk.title == 'Book One';
  })

  console.log(userBooks);
