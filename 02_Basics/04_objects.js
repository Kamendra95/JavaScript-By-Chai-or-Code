// >>>>>>>>>>>>>>>> singletone >>>>>>>>>>>


// const tinderUser = new Object()  // This is a singletone

const tinderUser = {}  // This is a non singletone
tinderUser.id = "123abc"
tinderUser.name = "Kamendra"
tinderUser.isLoggedIn = false
// console.log(tinderUser)



const regularUser = {
    email: "kundan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kamendra",
            middelname: "Kumar",
            lastname: "Sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname)



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)



// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"Hitesh"
}
const {courseInstructor: instructor} = course
console.log(instructor)



// // >>>>>>>>>>>>>>> Api key in JSON Format
// {
//     "name": "Kamendra",
//     "coursename": "js in hindi",
//     "price": "free"
// }



