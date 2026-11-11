const form = document.getElementById("pizzaform");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh  
    const name = document.getElementById("name").value;  // Get name's value
    const phone = document.getElementById("phone").value; // Get phone's value 
    const address = document.getElementById("address").value; // Get address's value
    const email = document.getElementById("email").value; // Get email's value 
    const size = document.getElementById("size").value; // Get size's value
    const toppings = Array.from(document.querySelectorAll("input[name='toppings']:checked")).map(input => input.value); // Get toppings' value
    const notes = document.getElementById("notes").value;

    // Display the order summary
    result.innerHTML = `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
        <p><strong>Special Instructions:</strong> ${notes}</p>
    `;
});

// ------------------------------------------------------------
// In this case, Javascript is preventing the default action of the form submission, which would normally cause the page to refresh. 
// This allows us to handle the form data and display it without losing the current state of the page. 
// Also, .value returns the current value of the input element, which is what the user has entered into the input field.
// Template literals (`${}`) are used instead of string concatenation because they allow embedding expressions directly within strings, 
// making the code more readable and easier to maintain. They also support multi-line strings, which is useful for formatting the output in a more structured way.
// -------------------------------------------------------------