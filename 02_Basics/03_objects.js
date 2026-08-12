//>>>>>>>>>>>>>>>> Object Literals >>>>>>>>>>>>

const mySym = Symbol("key1")

const jsuser = {
    name: "Kamendra",
    "full name": "Kamendra Sharma",
    [mySym]: "mykey1",
    age: 18,
    location: "Odisha",
    email: "kamendra@odisha.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"],
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])

jsuser.email = "kamindar@kumar.com"
// Object.freeze(jsuser)
jsuser.email = "kamendra@sharma.com"
// console.log(jsuser)


jsuser.greeting = function(){
    console.log("Hello js user")
}

jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())