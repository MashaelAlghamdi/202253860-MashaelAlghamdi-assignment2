document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark");
        toggleBtn.textContent = "☀️";
    }

    // Theme toggle
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");

        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // Contact form interaction 
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        formMessage.textContent = "Message sent successfully!";
        form.reset();
    });

});