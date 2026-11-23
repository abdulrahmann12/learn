const date = new Date();

// console.log(date.toString()); // Output: current date and time

    

let names = ["John", "Jane", "Doe", "Smith"];

console.log(names[0]); // Output: John
console.log(names[1]); // Output: Jane
console.log(names[4]); // Output: undefined

console.log(names.length); // Output: 4
// names.length = 2;
// console.log(names.length); // Output: 2
console.log(names.toString()); // Output: John,Jane

console.log(JSON.stringify(names)); // Output: [ 'Doe', 'Jane', 'John', 'Smith' ]

console.log(typeof(names)); // Output: object



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
fruits.shift();
console.log(fruits); // Output: [ 'Orange', 'Apple', 'Mango' ]