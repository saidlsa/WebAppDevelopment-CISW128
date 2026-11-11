console.log("Linked!")

//select the form element
//This throws
// const form = document.getElementById("contactform");

// //Listen for the submit event
// form.addEventListener("submit", function(event) {
//     event.preventDefault(); //this stops the page from reloading when user submits form
//     //Get theinput value
//     const name = document.getElementById("name").value;
//     //In the console, state Hello "username"
//     console.log("Hello, ",name);
// });

//Display Data on the front side of the website
const result=document.getElementById("contactform");
result.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    result.innerHTML = `<p>Hello, ${name}! Thanks for submitting.</p>`;
});