// Responsive Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Newsletter Signup Form
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
      signupMessage.textContent = 'Thank you for signing up!';
      signupMessage.style.color = '#2a9d8f';
      signupForm.reset();
    } else {
      signupMessage.textContent = 'Please enter a valid email address.';
      signupMessage.style.color = 'red';
    }
  });
}

function validateEmail(email) {
  // Simple email regex
  return /^\S+@\S+\.\S+$/.test(email);
}

// Placeholder for future interactivity (social sharing, comments) 