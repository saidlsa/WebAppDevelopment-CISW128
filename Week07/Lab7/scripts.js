let i=1; // initialize the loop control variable 'i' to 1
while(i<=10){ // loop while 'i' is less than or equal to 10
    console.log(i); // display the current number in the loop
    i++; // increment 'i' to avoid infinite loop
}

console.log("Counting finished"); // indicate that the counting has finished

console.log("Counting number from 1 to the number that you specify"); // indicate that the user will specify the number to count to
let count = Number(prompt("Enter the number (1-100): "));
for(let i=1; i<=count; i++){ // loop from 1 to the number's user specified value
    console.log(i); // display the current number in the loop
} 

console.log("Counting finished"); // indicate that the counting has finished



console.log("Creating a triangle pattern"); 
let triangle=""; // initialize the triangle pattern as an empty string
for(let line=1; line<=9; line++){ // loop to create each line of the triangle, incrementing the number of '#' characters per line from 1 to 9
    triangle += "#"; // this line by line adds one more '#' character to the triangle pattern
    console.log(triangle);// display the current line of the triangle pattern, showing the accumulated '#' characters and forming a right-angled triangle.
}
console.log("Leason finished");