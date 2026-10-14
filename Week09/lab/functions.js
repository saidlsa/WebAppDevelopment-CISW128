function greet() { // Function that greets the user, calling 'greet' will execute the code inside the function
    let name = prompt("What is your name?");  // Prompt the user for their name
    console.log("Hello, " + name + "!"); // Display a greeting message with the user's name
}
greet();

function addNumbers(l, m) { // Function that adds two numbers together
    return l + m; // Return the sum of 'l' and 'm'
}

let result = addNumbers(8, 5); // Call the function with arguments 8 and 5, and store the result
 console.log("The sum is: " + result); // Display the result '13'


function area(x, y) { // Function that multiplies two numbers together
    return x * y; // Return the product of 'x' and 'y'
}

console.log("You have a rectangle, the length is 20 and the width is 10, what is the area? "); // Prompt the user for the area of a rectangle with given dimensions
let result2 = area(20, 10); // Call the function with arguments 20 and 10, and store the result
console.log("The area is: " + result2); // Display the result



