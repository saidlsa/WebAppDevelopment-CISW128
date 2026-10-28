console.log("Linked");
//DOM and Basic Manipulation
//What is the DOM?
//Document Object Model, this is how the browser represents your web page in memory
//HTML elements becomes a JS object that we can access, change, or delete
//JS to change text, images, colors, classes, etc. This occurs after the web page fully loads


//Change text content with JS
//We are going to find the HTML Element via its ID attribute
const title=document.getElementById("title");
//document, representes the whole webpage loaded in the browser
// .getElementById("title"), finds the element in the html with the esact ID
//Const, means that the variable reference wont change, 
//it will always point to the same DOM element

title.textContent="Welcome to my Webpage";
//.textContent accesses or changes the text inside the element

//Selecting Elements
//getElementById, Selects oone element by its ID            document.getElementById("title")

//querySelector(), Selects the first match(Id, Class, tag)  document.querySelector(".main")

//querySelectorAll(), Returns a Nodelist of all matches     document.querySelectorAll("p")


//QuerySelector
const mainSection=document.querySelector(".main")
mainSection.style.backgroundColor="#f0f0f0"

//QuerySelectorAll
const paragraphs=document.querySelectorAll("p")
//Loop through all p elements and change their text
paragraphs.forEach((para, index) => {
    para.textContent = `Paragraph ${index + 1} modified by querySelectorAll()`; 
    para.style.color = "blue";
});



//Adding interactivity with Event Listeners
//Select Button

const button=document.getElementById("toggle");

//Listen for a button click
button.addEventListener("click", () =>{
    //toggle the highlight class on the body
    document.body.classList.toggle("highlight");

});
