const name = "Kamendra"
const repoCount = 20

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Kamendra-HC-com')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "   kamendra     "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "http://kamendra.com/kamendra%20sharma"
console.log(url.replace('%20', '-'));
console.log(url.includes('kamendra'));

console.log(gameName.split('-'));








