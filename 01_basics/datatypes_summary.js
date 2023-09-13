// Primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValye = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3493242198382190n // add n in last for bigint


// reference (Non-primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];
let obj = {
    name : "Satya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world")
}

