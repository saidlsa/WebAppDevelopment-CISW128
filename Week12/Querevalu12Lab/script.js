// Select the form and result section
const form = document.getElementById("emergencyform");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const relationship = document.getElementById("relationship").value;
    const email = document.getElementById("email").value;
    const note = document.getElementById("note").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Emergency Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p> <!-- it shows the Name of the emergency contact -->
      <p><strong>Phone:</strong> ${phone}</p> <!-- it shows the Phone number of the emergency contact -->
      <p><strong>Relationship:</strong> ${relationship}</p> <!-- it shows the Relationship of the emergency contact -->
      <p><strong>Email:</strong> ${email}</p> <!-- it shows the Email of the emergency contact -->
      <p><strong>Note:</strong> ${note}</p> <!-- it shows the Note of the emergency contact -->
    `;
});
//------------------------------------------------------------
// What does event.preventDefault() actually prevent?
// It prevents the default action of the form submission, which would normally cause the page to refresh.
//------------------------------------------------------------
// What does .value return?
// It returns the current value of the input element. That the user has entered into the input field.
//------------------------------------------------------------
// Why use template literals (`${}`) instead of string concatenation?
// Template literals allow embedding expressions directly within strings, making the code more readable and easier to maintain. And they also support multi-line strings.
//------------------------------------------------------------