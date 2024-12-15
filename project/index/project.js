document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');

    if (!email.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address.';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
        alert('Thank you for your message!');
    }
});

