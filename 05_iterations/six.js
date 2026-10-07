// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(values);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);



const books = [
  { title: 'Book one', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book two', genre: 'History', publish: 2010, edition: 2015 },
  { title: 'Book three', genre: 'Fiction', publish: 2011, edition: 2016 },
  { title: 'Book four', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book five', genre: 'Technology', publish: 2012, edition: 2017 },
  { title: 'Book six', genre: 'Biography', publish: 2013, edition: 2018 },
  { title: 'Book seven', genre: 'Fantasy', publish: 2014, edition: 2019 },
  { title: 'Book eight', genre: 'Mystery', publish: 2015, edition: 2020 },
  { title: 'Book nine', genre: 'Education', publish: 2016, edition: 2021 },
  { title: 'Book ten', genre: 'Adventure', publish: 2017, edition: 2022 }
];

let userBooks = books.filter( (bk) => bk.genre === 'Science');

userBooks = books.filter( (bk) => {
    return bk.publish >= 2009 && bk.genre === "History"
})

console.log(userBooks);