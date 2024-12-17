document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically check user credentials
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Mock login validation
    if(email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid credentials, please try again.");
    }
});
