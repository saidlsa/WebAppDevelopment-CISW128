let name = prompt("What is your name?");
let number = Number(prompt("How old are you? (1-100):"));

while (Number.isNaN(number) || number < 1 || number > 100) {    // check if the input is not a number or is outside the valid range
    number = Number(prompt("Invalid! Please enter a number from 1 to 100:"));
} // isNan is a method that checks if the value is not a number. If the user enters a value that is not a number or is outside the range of 1 to 100, 
  // the prompt will keep asking for a valid input until the user provides one.

console.log("Hello " + name + ", you are " + number + " years old.");

for (let year = number; year <= number; year++) {
    if (year >= 65) {
        console.log("Year " + year + ": You became a senior citizen."); // if the user's age is 65 or older, display a message indicating they are a senior citizen
    } else if (year >= 18) {
        console.log("Year " + year + ": You became an adult."); // if the user's age is between 18 and 64, display a message indicating they are an adult
    } else if (year < 18) {
        console.log("Year " + year + ": You became a minor."); // if the user's age is less than 18, display a message indicating they are a minor
    }
}

console.log("Lets count your age from 1 to " + number + ":");

let i = 1; // initialize the loop control variable 'i' to 1
while (i <= number) { // loop while 'i' is less than or equal to the user's age
    console.log(i); // display the current number in the loop
    i++; // increment 'i' to avoid infinite loop
}

console.log("Now let's create a triangle pattern based on your age:"); 
let trianglePattern = ""; 
for (let line = 1; line <= number; line++) {
    trianglePattern += "@"; // this line by line adds one more '@' character to the triangle pattern
    console.log(trianglePattern);
}

console.log("Let's solve math problems based on your age:");

let score = 0;

// Problem 1
let answer1 = number + 5; // correct answer
let userAnswer1 = Number(prompt("What is " + number + " + 5?")); // prompt the user for their answer
if (userAnswer1 === answer1) {
    console.log("Correct! Congratulations! " + number + " + 5 = " + answer1); // if the user's answer is correct, display a congratulatory message
    score++;
} else {
    console.log("Incorrect. The correct answer is " + answer1); // if the user's answer is incorrect, display the correct answer
}

// Problem 2 (I repeat the same structure for the next two problems)
let answer2 = number - 3;
let userAnswer2 = Number(prompt("What is " + number + " - 3?"));
if (userAnswer2 === answer2) {
    console.log("Correct! Congratulations! " + number + " - 3 = " + answer2);
    score++;
} else {
    console.log("Incorrect. The correct answer is " + answer2);
}

// Problem 3
let answer3 = number * 2;
let userAnswer3 = Number(prompt("What is " + number + " * 2?"));
if (userAnswer3 === answer3) {
    console.log("Correct! Congratulations! " + number + " * 2 = " + answer3);
    score++;
} else {
    console.log("Incorrect. The correct answer is " + answer3);
}

console.log("Your score is: " + score + "/3"); // display the user's score out of 3