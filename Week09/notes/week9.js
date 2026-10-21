// What is a fuction?
// reusable block of code designed to perform a specific task

function greetUser() {
    console.log("Hello There!");
}

greetUser(); // calls (executes) the function.

//Function Structure
// Keyword, function: tells JS we're defining a function
// Name, identify the function
// Parameters, Vaariables inside the parentheses that receive data
// Body, The code between {}

// Parameters and Arguments
// Parameter: Placeholders when defining a function
// Arguments: actual value when calling it

function greet(name){
    console.log("Hello " + name);
}

greet("Said"); // "Said is the argument"
greet("John"); // "John is the argument"

// Function that will add two numbers together
// Then console the total

function addNumbers(a,b) {
    return(a + b);
}

let total=addNumbers(4, 6); // 10
console.log("The total is: " + total);

// return sends a value back to where the function was called
// console.log() just prints it

// Return is like your function handing you back a notes with the answer written on it
// console.log() is your function yelling the answer out loud, we hear it but we can't use it again

function multiplyNumbers(x,y) {
    return x*y;
}

let result=multiplyNumbers(15, 15); // 225
console.log("The result is: " + result);    



// Create me a function that will count to 5 by 1s

function countToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

countToN(5);

// Nested Functions
// Function can call another function inside of it
function square(num){
    return num*num;
};

function printSquare(num){
    console.log("Square is: " + square(num));
}

printSquare(6); // Square is: 36

// greets the user, asks for their name, then prints it
function username() {
    let name = prompt("What is your name?");
    console.log("Welcome, " + name);

}

username();




