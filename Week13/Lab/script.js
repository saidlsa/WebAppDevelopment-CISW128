console.log("Linked!")
// Select the form and elements from the page
const form = document.getElementById("contactForm");
 
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
 
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const successMessage = document.getElementById("successMessage");
 
// Regex pattern to check a basic email format
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
 
// Validation functions
// Each function checks one field, shows or clears the error message,
// and returns true if the field is valid or false if it is not.
 
function validateName() {
    const name = nameInput.value.trim();
 
    if (name === "") {
        nameError.textContent = "Name is required.";
        return false;
    }
 
    nameError.textContent = ""; // clear the error if the name is fine
    return true;
}
 
function validateEmail() {
    const email = emailInput.value.trim();
 
    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    }
 
    // .test() checks if the email matches the regex pattern
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email (example: name@email.com).";
        return false;
    }
 
    emailError.textContent = ""; // clear the error if the email is fine
    return true;
}
 
function validateAge() {
    const ageValue = ageInput.value.trim();
 
    if (ageValue === "") {
        ageError.textContent = "Age is required.";
        return false;
    }
 
    const age = Number(ageValue);
 
    // Check that it is a real number and at least 1
    if (isNaN(age) || age < 1) {
        ageError.textContent = "Age must be a number of at least 1.";
        return false;
    }
 
    ageError.textContent = ""; // clear the error if the age is fine
    return true;
}
 
 
// Blur events: validate when the user leaves a field
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
ageInput.addEventListener("blur", validateAge);
 
 
// Submit event: validate everything when the form is sent 
form.addEventListener("submit", function (event) {
    // Stop the page from refreshing
    event.preventDefault();
 
    // Run all validations (stored separately so every error message shows up)
    const nameValid = validateName();
    const emailValid = validateEmail();
    const ageValid = validateAge();
 
    if (nameValid && emailValid && ageValid) {
        // Everything is valid: show the success message
        successMessage.textContent = "Form submitted successfully!";
        successMessage.className = "success";
 
        // Reset the form and clear any old error messages
        form.reset();
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";
    } else {
        // Something is invalid: make sure no success message is shown
        successMessage.textContent = "";
        successMessage.className = "";
    }
});