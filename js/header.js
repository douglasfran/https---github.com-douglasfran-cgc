const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const submenuParents = document.querySelectorAll('.menu-item-has-children');

// Toggle the menu and hamburger animation
hamburger.addEventListener('click', (event) => {
    navMenu.classList.toggle('nav-active'); // Toggle the visibility of the menu
    hamburger.classList.toggle('nav-active'); // Toggle the hamburger animation
    document.body.classList.toggle('no-scroll'); // Prevent scrolling when the menu is open
    event.stopPropagation(); // Prevent the click from propagating to the body
});

// Close the menu when clicking outside of it
document.body.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-active')) {
        navMenu.classList.remove('nav-active');
        hamburger.classList.remove('nav-active');
        document.body.classList.remove('no-scroll');
    }
});

// Close the menu when a link is clicked (optional for better UX)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
        hamburger.classList.remove('nav-active');
        document.body.classList.remove('no-scroll');
    });
});

// Toggle submenu visibility
submenuParents.forEach(parent => {
    const submenuToggle = parent.querySelector('a');
    submenuToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        event.stopPropagation(); // Prevent click from propagating to parent elements

        const submenu = parent.querySelector('.submenu');
        const isActive = parent.classList.contains('active');

        // Close all other submenus
        submenuParents.forEach(otherParent => {
            if (otherParent !== parent) {
                otherParent.classList.remove('active');
                const otherSubmenu = otherParent.querySelector('.submenu');
                if (otherSubmenu) {
                    otherSubmenu.style.maxHeight = null; // Collapse submenu
                }
            }
        });

        // Toggle the current submenu
        if (submenu) {
            if (isActive) {
                submenu.style.maxHeight = null; // Collapse submenu
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + 'px'; // Expand submenu
            }
        }

        parent.classList.toggle('active'); // Toggle active class
    });
});
