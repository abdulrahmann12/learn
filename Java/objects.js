const user = {
    'fname': 'John',
    'lname': 'Doe',
    'age': 30,
    'email': 'john.doe@example.com',
    'fullName' : function() {
        return this.fname + ' ' + this.lname;
    }
}

console.log(user.fname); // Output: John Doe
console.log(user.age); // Output: 30
console.log(user.email); // Output: john.doe@example.com
console.log("Full Name: ", user.fullName()); // Output: John Doe Doe

const empty = {};

empty.name = 'Jane Doe';
empty.age = 25;
empty.email = 'jane.doe@example.com';
console.log("empty: ", empty); // Output: Jane Doe

const person = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: 50 Doe

console.log('fullName' in person); // Output: true

let text = person.fullName();
let text1 = person.fullName;
console.log(text); // Output: John Doe
console.log(text1); // Output: [Function: fullName]

person.salary = function() {
    return this.age * 1000;
};

// console.log(person.salary()); // Output: 50000

const myArray = Object.values(person);
// console.log(person); // Output: { firstName: 'John', lastName: 'Doe', age: 50, fullName: [Function: fullName], salary: [Function: salary] }
//console.log(JSON.stringify(myArray)); // Output: [ 'John', 'Doe', 50, [Function: fullName], [Function: salary] ]
const myArray1 = Object.keys(person);
//console.log(JSON.stringify(myArray1)); // Output: [ 'firstName', 'lastName', 'age', 'fullName', 'salary' ]
const myArray2 = Object.entries(person);
//console.log(JSON.stringify(myArray2)); // Output: [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 50 ], [ 'fullName', [Function: fullName] ], [ 'salary', [Function: salary] ] ]
console.log(JSON.stringify(person)); // Output: {"firstName":"John","lastName":"Doe","age":50,"fullName":{},"salary":{}}