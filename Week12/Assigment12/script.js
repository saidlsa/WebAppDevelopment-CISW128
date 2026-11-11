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