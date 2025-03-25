document.querySelectorAll('.terms-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const termsSection = button.parentElement;

        // Toggle active class
        termsSection.classList.toggle('active');
    });
});
