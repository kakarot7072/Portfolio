document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to a server
        // For this static version, we'll just log it and show a success message
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        form.reset();
    });
});