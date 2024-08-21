// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
    const contactForm = document.getElementById("contactForm");
    const contactTitle = document.getElementById("fuck");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        contactTitle.textContent = "Fuck YOu";
    });
});
