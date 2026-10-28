console.log ("linked")

const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
    alert("Why did you clicked it?")
});
// did the alert appear?
// Yes, it did. In this case it shows like an alarm when someone click in "Click me"

//--------------------------------------------------------------
//-----------------------------Event 1--------------------------
//--------------------------------------------------------------
const date = document.getElementById ("date");

date.addEventListener("click", function (){
    document.getElementById("button_date").innerHTML = Date();
})

//This event shows the time exactly where you are.

//--------------------------------------------------------------
//-----------------------------Event 2--------------------------
//--------------------------------------------------------------

const chgcolor = document.getElementById ("chgcolor");

chgcolor.addEventListener ("mouseover", ()=>{
    chgcolor.style.color= "green";
});

chgcolor.addEventListener("mouseout", () => {
    chgcolor.style.color="red";
});

//This event changes the color of the text located inside the button

//--------------------------------------------------------------
//-----------------------------Event 3--------------------------
//--------------------------------------------------------------

const key = document.getElementById("key");

key.addEventListener("keydown", function (event) {
  document.getElementById("demo").innerHTML = "You pressed: " + event.key;
});

//This event shows the letter that you text into the box

//--------------------------------------------------------------
//-----------------------------Event 4--------------------------
//--------------------------------------------------------------

const mover = document.getElementById("mover");

mover.addEventListener("mouseover", function () {
  mover.innerHTML = "Mouse is over me!";
});

mover.addEventListener("mouseout", function () {
  mover.innerHTML = "Mouse is out!";
});

//This Event change the text that it contains into the box when I move the mouse over that.

//--------------------------------------------------------------
//-----------------------------Event 5--------------------------
//--------------------------------------------------------------

const dblclick = document.getElementById("dblclick"); 
dblclick.addEventListener("dblclick", () => { 
dblclick.textContent = "Double-clicked!, Thank you for participate."; 
});

//This event change the text when you double click in the box
