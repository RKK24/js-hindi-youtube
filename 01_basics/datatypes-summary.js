// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
console.log(typeof score); // number
console.log(typeof scoreValue); // number

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol

const bigNumber = 3456543576654356754n;
console.log(typeof bigNumber); // bigint

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); // object

let myObj = {
    name: "Jhon",
    age: 22
};
console.log(typeof myObj); // object

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction); // fuction or object function



