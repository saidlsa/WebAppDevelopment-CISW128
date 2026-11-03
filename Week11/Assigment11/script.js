console.log ("Indexed")
//----------------------------------------------------
//This event allows the user to toggle between light and dark themes by clicking a button.
//----------------------------------------------------

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  console.log("Theme changed!");
});

//----------------------------------------------------
// This event allows the user to add items to a list by clicking a button.
//----------------------------------------------------

const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
let counter = 1; 

addBtn.addEventListener("click", () => {

  const newItem = document.createElement("li");
  const ideas = ["Study", "Exercise", "Read", "Cook", "Clean", "Relax"]; // Array of ideas to cycle through
  newItem.textContent = "Assignment " + counter + " - " + ideas[(counter - 1) % ideas.length]; 
  // In this part, I added a list of ideas to make the items more interesting and varied. 
  // The modulo operator (%) is used to cycle through the ideas array based on the counter value.

  list.appendChild(newItem);

  counter++;
});
//----------------------------------------------------
// This event allows the user to remove an item from the list by clicking on it.
//----------------------------------------------------


list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("You removed: " + event.target.textContent);
    event.target.remove();}
});

//----------------------------------------------------
// This event shows the key that was pressed on the keyboard.
//----------------------------------------------------

const keyOutput = document.getElementById("keyOutput");   
document.addEventListener("keyup", (event) => {
      keyOutput.textContent = "You pressed: " + event.key;
});
