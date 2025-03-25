document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');

        // Toggle active class
        faqItem.classList.toggle('active');

        // Expand or collapse the answer
        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px'; // Expand
        } else {
            faqAnswer.style.maxHeight = null; // Collapse
        }
    });
});
