// Toggle password visibility for the password field
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    // Toggle password visibility
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
});

// Toggle password visibility for the confirm password field
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordField = document.getElementById('confirmPassword');

toggleConfirmPassword.addEventListener('click', function () {
    // Toggle password visibility
    const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    confirmPasswordField.type = type;

    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
});

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = 'Passwords do not match!';
        return false; // Stop the form submission
    }

    // Here, you would normally send the data to the server for account creation
    // For example, using fetch to send to an API endpoint
    // For this demo, we will simulate a successful account creation

    // Simulate account creation success and redirect to dashboard
    alert('Account created successfully!');
    window.location.href = 'dashboard.html'; // Redirect to dashboard after successful registration
    return true; // Allow the form submission (though it's being handled by JS)
}
