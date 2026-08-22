const user = {
    username: "Kamendra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "kame"
// user.welcomeMessage()



// function chai(){
//     let username = "kamendra"
//     console.log(this.username)
// }
// chai()



// const chai = function(){
//     let username = "Kamendra"
//     console.log(this.username)
// }
// chai()



const chai = () => {
    let username = "Kamendra"
    console.log(this.username)
}
// chai()






// >>>>>>>>>>>>>>> Arrow function >>>>>>>>>>>>>>
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Kamendra"})
console.log(addTwo(3, 4))