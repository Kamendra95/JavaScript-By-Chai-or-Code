let a = 300

if(true){
    let a = 10
    const b = 20
    console.log("Inner:", a)
}

// console.log(a)



function one(){
    const username = "Kamendra"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()



if(true){
    const username = "Kamendra"
    if(username === "Kamendra"){
        const website = "  Youtube"
        console.log(username + website)
    }
}



console.log(addone(5))
function addone(num){
    return num + 1
}
// addone(5)

// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))