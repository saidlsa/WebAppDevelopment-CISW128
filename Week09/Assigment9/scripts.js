function greet() {
    let name = prompt("What is your name?"); // Prompt the user for their name
    let age = Number(prompt("How old are you?"));  // Prompt the user for their age
    console.log ("Hello, " + name + ", let's get started!"); // Display a greeting message with the user's name
    console.log("You are " + age + " years old."); // Display the user's age
    
    countdown(age); // Call the countdown function with the user's age as an argument

}

function countdown(n) { // Function that counts down from a given number 'n' to 1
    for (let a = n; a >= 1; a--) {
        console.log(a);
    }
}

function addNumbers(x,y) {
    return x + y; // Return the sum of 'x' and 'y'
}

function datas(Space, age) {
    console.log("Michael is " + Space + " and he is " + age + " years old."); // Display the name and age of michael
}

greet(); // Call the function to execute the code inside it

console.log("Creating a triangle:"); // Display a title for the triangle
let line = ""; 
let count = 1; 

// This while loop repeats as long as the counter is less than or equal to 5
while (count <= 5) {
  line = line + "*"; // Add one more '*' character to the line variable
  console.log(line);   // Display the current line of the triangle pattern
  count++;            // Increment the counter by 1 to avoid an infinite loop
}

console.log("Triangle finished!");


datas("Human", 25); // Call the function with arguments "Human" and 25

console.log ("Let's solve math problems based on his age:"); // Display a message before the sum

let sum = addNumbers(2, 5); // Call the function with arguments 2 and 5, and store the result
console.log("The sum is: " + sum); // Display the result '7'

console.log("Now let's count down from 7 to 1:"); // Display a message before the second countdown

countdown(7); // Call the function with argument 7 to count down from 7 to 1

console.log("Countdown finished!"); // Display a message indicating the end of the countdown
console.log("That's all for now!"); // Display a message indicating the end of the program












