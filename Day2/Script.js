// Alerts :-
// Alert method used to intract with user by displaying popup messages.
// Example

alert("Welcome to the Website.!"); 

// OutPut: pop's an Welcome to the Website.! message on browser display.

//----x----x----

// Prompts :-
// Displays a dialog box that asks the user for input. Gathering user input directly from the browser. It contains a text field and OK/Cancel buttons.
// Example

let name = prompt("What is your UserName ?"); // We can also use alert method to display the user input same as an popup message on browser display
alert("Hello, " + name + " Welcome back.!"); // name as my name Shibe S M.

// OutPut: pop's an Hello, Shibe S M Welcome back.! message on browser display.

//----x----x----

// Operators - Arithmetic :-
// Arithmetic operators perform mathematical calculations on numbers.
// Example

let a = 10;
let b = 5;

console.log(a + b); // OutPut: 15
console.log(a - b); // OutPut: 5
console.log(a * b); // OutPut: 50
console.log(a / b); // OutPut: 2
console.log(a % b); // OutPut: 0
console.log(a ** b); // OutPut: 100000

//----x----x----

// Logical Operators :-
// Logical operators are used to perform logical operations, usually in conditions (like if statements)
// Example

let x = "Apple";
let y = "Orrange";

console.log(x == "Apple" && y == "Orrange"); // OutPut: true - both values are same and must be same.
console.log(x == "Apple" && y == "Grape"); // OutPut: false - both values are not same so it throws false.
console.log(x == "Grape" || y == "Orrange"); // OutPut: true - at least one value must be same here y value is same so it throws true.
console.log(x == "Grape" || y == "Mango"); // OutPut: false - both values are not same so the OR operator is not satisfied so it throws false.
console.log(!x == "Apple" ); // OutPut: false - inverts true to false

//----x----x----

// Variables :-
// Variables in JavaScript are used to store data(any type) that can be referenced and manipulated later in the code.
// Example

var myName = "Shibe S M";
let myAge = "26";
const myState = "Tamil Nadu";

console.log(myName); // OutPut: Shibe S M
console.log(myAge); // OutPut: 26
console.log(myState); // OutPut: Tamil Nadu

// Another Examples

var d = 50;
function exVar() {
    var d = 52;
    console.log(d);
}
exVar(); // Var can be Re-Declare through global and block scops.

let k = 40;
let k = 48; 
console.log(k); // let is in global scope so can't be Re=Declare. throws an Error Already Decleared.

let m = 10;
function exLet() {
    let m=100
    console.log(m);
}
exLet(); // 100 Let can be Re-Declare only on block Scope (local sope).
console.log(m); // 10 Let variable in global scope so we can't Re-declare the value.

//----x----x----

// Data Types :-
// JavaScript has several basic data types

let v = "Hello World";
console.log(typeof (new)); // String
let j = 82;
console.log(typeof (j)); // number
let logIn = true;
console.log(typeof (logIn)); // boolean
let nothing = null;
console.log(typeof(nothing)); // null or object
let noValue;
console.log(typeof(noValue)); // undefined

//----x----x----