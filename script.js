// Hamburger menu toggle

const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

// Smooth scrolling for nav links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

        // Close mobile menu after clicking

        navLinks.classList.remove('active');

    });

});

// Contact form submission

document.getElementById('contact-form').addEventListener('submit', function (e) {

    e.preventDefault();

    const name = document.getElementById('name').value;

    const email = document.getElementById('email').value;

    const message = document.getElementById('message').value;
    const idea=
document.getElementById('idea').value;
    // Log form data to console (replace with actual form submission logic)

    console.log('Form Submitted:', { name, email, message });

    // Clear form

    this.reset();

    alert('Thank you for your message!');

});