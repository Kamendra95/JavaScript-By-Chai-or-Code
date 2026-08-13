function sayMyName(){
    console.log("K")
    console.log("A")
    console.log("M")
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("R")
    console.log("A")
}

// sayMyName()



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){

    // console.log("Kamendra Sharma")
    return number1 + number2
    // console.log("Sharma")

}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result)



function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kamendra"))
// console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500))



const user = {
    username: "Kamendra",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "Sonu",
    price: 499
})



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))