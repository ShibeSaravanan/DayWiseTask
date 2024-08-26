// Hoisting :-
// Hoisting in var Variable
//Example
console.log(a);
var a=5;

// ----x----x----

// Hoisitng in let and const variable :-
//Example
console.log(b);
console.log(c);
let b=85;
const c=63; // Let & const not support a Hoisting

// Hoisting in normal functions :-
hello()
function hello(){
    console.log("hello");
}
 // Output: hello

// ----x----x----

// Hoisting in arrow function :-
//Example
arrFun()
const arrFun=()=>{
    console.log("arrFun");
}
// Output: Error Cannot access 'arrFun' before because of not supports hoisting

// ----x----x----

// Arrays :-
/* An array is a collection of items stored at contiguous memory locations.
Arrays can store multiple values in a single variable, and each value is accessed using an index. */
//Example

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // Output: "apple"
console.log(fruits.length); // Output: 3
console.log(fruits.indexOf("banana")); // Output: 1

// ----x----x----

// Common Array Methods - Push Method :-
// Add elements from the end of an array.
//Example
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

// ----x----x----

// Common Array Methods - Pop Method :-
// Remove elements from the end of an array.
//Example
fruits.pop();
console.log(fruits); // Output:  ["apple", "banana", "mango"]

// ----x----x----

// Common Array Methods - unshift Method :-
// Add elements from the beginning of an array.
//Example
fruits.unshift("grape");
console.log(fruits); // Output: ["grape", "apple", "banana", "mango"]

// Common Array Methods - shift Method :-
// Add elements from the beginning of an array.
//Example
fruits.shift();
console.log(fruits); // ["apple", "banana", "mango"]

// ----x----x----

// Iterating Over Objects :-
// Using for-in Loop :-
let person = {
  name: "Shibe",
  age: 26,
  city: "Erode"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// "name: Shibe"
// "age: 25"
// "city: Erode"

// ----x----x----

// Iterating Over JSON :-

let attendenceData = [
  {
    name: "elango",
    class: "FSD",
    percentage: 80
  },
  {
    name: "ranjith",
    class: "FSD",
    percentage: 50
  },
  {
    name: "gopi",
    class: "FSD",
    percentage: 75
  },
  {
    name: "divakar",
    class: "FSD",
    percentage: 67
  },
  {
    name: "sathyamoorthy",
    class: "FSD",
    percentage: 40
  }
];

attendenceData.forEach(item =>{
  if(item.percentage>=80){
    console.log(`${item.name} has good ${item.percentage} % in ${item.class} class` )
  }else {
    console.log(`${item.name} has bad ${item.percentage} % in ${item.class} class`);
  }
});

/* Output:
elango has good 80 % in FSD class
ranjith has bad 50 % in FSD class
gopi has bad 75 % in FSD class
divakar has bad 67 % in FSD class
sathyamoorthy has bad 40 % in FSD class */

// ----x----x----