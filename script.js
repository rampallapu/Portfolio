document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Alert
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        this.reset();
    });
});
