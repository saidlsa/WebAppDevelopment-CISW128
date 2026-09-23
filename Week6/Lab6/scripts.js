// Grate calculator

let score = Number(prompt("Enter your score (0–100):"));
if (score >= 90) {
    console.log("The score you have is: A");
}
else if (score >= 80) {
    console.log("The score you have is: B");
}
else if (score >= 70) {
    console.log("The score you have is: C");
}
else {
    console.log("The score you have is: F");
}
// Age Check
let age=Number(prompt("What is your age?"));
if (age >= 18) {
    console.log("Adult.");
}
else {
    console.log("Minor.");
}
// Custom Check
let discount=prompt("What membership do you have?").toUpperCase().toLowerCase();
if (discount === "GOLD") {
    console.log("You get a 45% discount.");
}
else if (discount === "silver") {
    console.log("You get a 35% discount.");
}
else if (discount === "Bronze") {
    console.log("You get a 20% discount.");
}
else {
    console.log("Discount does not apply.");
}


