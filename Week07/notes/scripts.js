// comparision operators
//=== equal to
// !== not equal

//console.log(1==1);
//console.log(1!==1);

//let score=85;
//if (score >= 89) {
//    console.log("You got an A");
//}

//else if (score >= 79) {
//    console.log('You got a B');
//}
//else if (score >=69){
//    console.log('You got a C or lower');
//}
//else {
//    console.log('You have a mediocre grade');
//}




//let agre=25;
//let isMember = true;

//if (agre >= 18) {
//    if(isMember) {
//        console.log("adult member benefits applied");
//    }
//   else{
//        console.log("Adult, but not a member");
//    }
    
//} 
//else {
//        console.log("Minor");
//    }



//We use Prompt() to make our websites more interactive
//let score=85;
// //this variable is hardcoded. iser camt cjamge tjos
//let score=Number(prompt("Enter your score (0-100)"));
//if (score >= 90) {
//    console.log("A");
//}
//else if (score >= 80) {
//    console.log("B");
//}
//else if (score >= 70) {
//    console.log("C");
//}
//else {
//    console.log("F");
//}

//document.body.innerHTML += "<p>The score you have is a " + score + "</p>";


//I want the website to ask for the user for their name, and then display "Hello [name]"
//let username=prompt("What is your name? "); 
//document.body.innerHTML += "<p>Hello, " + username + "!</p>";


// WHY USE LOOPS?
//Repeat code multiple times, without duplicating code

// The WHILE LOOP
//while (condition) {
    // code to run repeatedly if condition is true
    // Infinite loops, make sure something inside changes the condition.
//}

//basic program that is going count from 1-5, and will display it via console
//let count=0; //this is our starting point, initialize loop control variable
//while (count <= 5){ //checks condition, if true everything in brackets runs
//    console.log("count is: "+count);
//    count++; //increment to avoid infinite loop
//}

//FOR loop
//for(initialization; condition; final-expression) {
   //repeated code
//}

//for(let i=0; i<=5; i++){
//   console.log("i is: "+i);
//}

//let i=1, is our starting peeeeeoint
// i,<=5, means to strop when greater than 5
//i++, we are counting by 1
//Why FOR is cleanes: All loop is in one line, easier to read.

//Program that lets the user pick what number to count to
//let numb=Number(prompt("Pick a number: "));
//for(left i=1; i<=num;i++){
//   console.log("i");''
//}



// classic triangle loop pattern
let triangle="";
for(let line=1; line<=7; line++){
    triangle += "*";
    console.log(triangle);
}




















