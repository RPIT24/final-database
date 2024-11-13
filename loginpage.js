// Handle login functionality
function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login logic (you can replace this with your real authentication logic)
    if (username && password) {
        // Save username to localStorage
        localStorage.setItem('username', username);

        // Redirect to a dashboard or home page (adjust URL as necessary)
        window.location.href = "dashboard.html"; // Change this URL based on your flow
    } else {
        document.getElementById('error-message').textContent = "Please fill in both fields.";
    }
}

// Check if there's a stored username in localStorage and pre-fill the login form
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('logoutFooter').style.display = "block"; // Show logout button
    }
}

// Handle logout functionality
function logout() {
    // Clear the username from localStorage
    localStorage.removeItem('username');

    // Redirect to login page
    window.location.href = "login.html"; // Adjust the URL if necessary
}
