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
    <!--In this section, we are displaying the order summary to the user after they submit the form. We are using template literals -->
    <!-- to insert the values of the form inputs into the HTML that will be displayed in the result section. -->
        <h2>Order Summary</h2> <!-- Display the order summary -->
        <p><strong>Name:</strong> ${name}</p> <!-- Display the name of the customer -->
        <p><strong>Phone:</strong> ${phone}</p> <!-- Display the phone number of the customer -->
        <p><strong>Address:</strong> ${address}</p> <!-- Display the address of the customer -->
        <p><strong>Email:</strong> ${email}</p> <!-- Display the email of the customer -->
        <p><strong>Size:</strong> ${size}</p> <!-- Display the size of the pizza selected by the customer -->
        <p><strong>Toppings:</strong> ${toppings.join(', ')}</p> <!-- Display the toppings selected by the customer -->
        <p><strong>Special Instructions:</strong> ${notes}</p> <!-- Display the special instructions provided by the customer -->
    `;
});

// ------------------------------------------------------------
// In this case, Javascript is preventing the default action of the form submission, which would normally cause the page to refresh. 
// This allows us to handle the form data and display it without losing the current state of the page. 
// Also, .value returns the current value of the input element, which is what the user has entered into the input field.
// Template literals (`${}`) are used instead of string concatenation because they allow embedding expressions directly within strings, 
// making the code more readable and easier to maintain. They also support multi-line strings, which is useful for formatting the output in a more structured way.
// -------------------------------------------------------------