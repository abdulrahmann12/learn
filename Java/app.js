let x = 5;
let X = 10;
const z = 32;
let age = 19;

x = 4;
const _ = 20;

console.log(x); // Output: 5
console.log(X); // Output: 10
console.log(z); // Output: 32
console.log(_); // Output: 20
console.log(typeof(0)); // Output: "number"\

age >= 18 ? console.log("You are an adult.") : console.log("You are a minor.");



let text = "We are the so-called \"Vikings\" from \v the north.\b";

console.log(text); // Output: We are the so-called "Vikings" from the north.

let firstName = "John";
let lastName = "Doe";

console.log(`${firstName} ${lastName}`); // Output: John Doe

"use strict";

let text1 = "HELLO WORLD";

// Try to change the first letter to "A"
try {
  text1[0] = "A";
} catch(err) {
  text1 = err.message
}
console.log(text1); // Output: HELLO WORLD (strings are immutable in JavaScript)

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 14);
console.log(part); // Output: Banana

let text4 = "The rain in SPAIN stays mainly in the plain";
console.log(text4.match(/ain/gi)); // Output: [ 'ain', 'AIN', 'ain', 'ain' ]
console.log(100 / "10");

let a = NaN;
let b = "5";
let c = a + b;
console.log(c); // Output: NaN5  

console.log(parseInt(" 5 4")); // Output: 5


let name = 'John';

function heelo(name) {
    return `Hello, ${name}!`;
}

console.log(heelo(name)); // Output: Hello, John!

const add = (a,b) => a+b;
console.log(add(5, 10)); // Output: 15

function myFunction() {
    console.log("I am a function!");
}
setTimeout(myFunction, 3000);