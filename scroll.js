// Get all navigation links within the header
const navLinks = document.querySelectorAll('.nav-link a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the target element corresponding to the link's href attribute
    const target = document.querySelector(link.hash);

    // Check if the target element exists
    if (target) {
      // Scroll to the target element using a smooth scroll animation
      target.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.error(`Error: Target element not found for link "${link.textContent}"`);
    }
  });
});
