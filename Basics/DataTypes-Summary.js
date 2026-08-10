// Primitive: (7 Types):- String, NUmber, Boolean, Null, Undefined, symbol, BigInt

const { useInsertionEffect } = require("react")

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol("123")

const anotherId = Symbol('123')
console.log(id == anotherId)


// Reference (Non primitive):- Array, Objects, Functions

const heros = ["Aman", "Naagraj", "DOga"]

let myObj = {
    name: "Kamendra",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world")
}

// console.log(typeof myObj);
// console.log(typeof myFunction)



// >--------------- Memory --------------------<
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "kamendra@gamil.com"
let anotherName = "myYoutubeName"
anotherName = "chaiorcode"

console.log(myYoutubeName)
console.log(anotherName);

let userOne = {
    email: "kamendra6097879@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kamendrakumar758546@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

