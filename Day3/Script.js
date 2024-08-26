// Function Declaration Normal Function :-
// Example

function add(a,b) {
    console.log(a + b);
}
add(5,5); // Output: 10

// ----x----x----

// Anonymous  Function :-
// In a function expression, a function is assigned to a variable. This allows functions to be anonymous (without a name).
// Example

let simpleIntrest = function(p,r,t){
    return (p * r * t) / 100;
}
console.log("Rs." + simpleIntrest(40000,2,6) + " per month"); // Output: Rs.4800 per month

// ----x----x----

// Arrow Function :-
// Introduced in ES6, arrow functions provide a shorter syntax and are often used for writing small functions.
// Example

const multiply = (a, b) => a * b ;
console.log(multiply(5, 3)); // Output: 15

// ----x----x----

// Higher-Order Function :-
// A higher-order function is a function that takes another function as an argument or returns a function as a result.
// Example

function oldFun(){
    return function newFun(){
        console.log("Return Function");
    } 
}
let outPut=oldFun();
outPut(); // Return Function

// Another example

function displayss(name){
    return function(age){
        console.log(name+", "+age);
    };
}
let output=displayss("Shibe");
output("26"); // Shiebe, 26

// ----x----x----

// Callback Function :-
// A callback function is a function passed as an argument to another function and executed after the completion of that function.
// Example

function mr(yourName) {
    const name = "Shibe";
    yourName(name);
  }
  
  mr(function(name) {
    console.log("Hello, " + name);
  }); 
// Output: Hello, Shibe

// ----x----x----

//  Basic If-Else Statement :-
/* The if statement evaluates a condition. If the condition is true, the code block within the if statement is executed.
The else statement follows an if statement and executes its block of code if the condition in the if statement is false.*/
// Example

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
} 
// Output: "You are eligible to vote."

// ----x----x----

// If-Else Ladder :-
// The if-else if-else ladder is used when you need to check multiple conditions. It allows you to test several conditions in sequence.
// Example

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Output: "Grade: C"

// ----x----x----

// Nested If-Else :-
// Nested if-else statements allow you to place an if-else statement inside another if-else statement. This is useful when you need to make multiple decisions based on different conditions.
// Example

let year = 2024;
let isLeapYear;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
  } else {
    isLeapYear = true;
  }
} else {
  isLeapYear = false;
}

console.log(isLeapYear ? "Leap year" : "Not a leap year");
// Output: "Leap year"

// ----x----x----

// Ternary Operator :-
// The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
// Example

let myage = 26;
let canDrive = (myage >= 18) ? "Yes" : "No";

console.log("Can Drive: " + canDrive);
// Output: "Can Drive: Yes"

// ----x----x----

// Switch Statement :-
// The switch statement is an alternative to multiple if-else if statements. It compares the value of a variable against multiple cases and executes the corresponding block of code.
// Example

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day.");
}
// Output: "Start of the work week."

// For loop in HOF :-
// Example

function loop(){
    return function(){
        let i;
        for(i=0;i<6;i++){
            console.log("i="+i);
        }
    }  
}
let finalout=loop();
finalout(); // i=0, i=1, i=2, i=3, i=4, i=5

// ----x----x----

//while (entry check) :-
// Example

let i=3
while (i<=5) {
     console.log("i=",i);
     i++;
     
}
// Output: i= 3, i= 4, i= 5

// ----x----x----

//do while (exit check) :-
// Example

let j=3
do{
    console.log("i=",j);
    j--;
}while(j>=0); 
// Output: i= 3, i= 2, i= 1, i= 0

// ----x----x----

