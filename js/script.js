// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // === Project Toggle Functionality ===
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'Show Details';
            }
        });
    });

    // === Form Validation ===
    const contactForm = document.getElementById('contactForm');
    const formErrors = document.getElementById('formErrors');

    contactForm.addEventListener('submit', (e) => {
        formErrors.innerHTML = ''; // clear previous errors

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();
        const errors = [];

        // Basic validations
        if (!name) {
            errors.push('Name is required.');
        }

        if (!email) {
            errors.push('Email is required.');
        } else if (!validateEmail(email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!message) {
            errors.push('Message cannot be empty.');
        }

        // If there are errors, prevent submission and show messages
        if (errors.length > 0) {
            e.preventDefault();
            formErrors.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
        }


    });

    // Simple email format checker
    function validateEmail(email) {
        // Basic regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const typed = new Typed('#typed-name', {
        strings: ['Motunrayo'], // Text you want to type
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });
});

// Smooth scroll for navigation links