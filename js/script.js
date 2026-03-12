document.addEventListener("DOMContentLoaded", () => {

const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");
const greeting = document.getElementById("dynamic-greeting");
const searchInput = document.getElementById("project-search");
const sortSelect = document.getElementById("project-sort");
const cards = document.querySelectorAll(".project-card");
const titles = document.querySelectorAll(".project-title");
const container = document.querySelector(".projects-wrapper");
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

/* ---------------- DARK MODE ---------------- */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
body.classList.add("dark");
toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {

body.classList.toggle("dark");

const isDark = body.classList.contains("dark");

toggleBtn.textContent = isDark ? "☀️" : "🌙";

localStorage.setItem("theme", isDark ? "dark" : "light");

});

/* ---------------- GREETING ---------------- */

const hour = new Date().getHours();

let message = "";

if (hour < 12) {
message = "Good Morning";
}
else if (hour < 18) {
message = "Good Afternoon";
}
else {
message = "Good Evening";
}

greeting.textContent = message;

setTimeout(() => {
greeting.style.opacity = "1";
}, 200);

setTimeout(() => {
greeting.style.opacity = "0";
}, 2500);

/* ---------------- PROJECT SEARCH ---------------- */

searchInput.addEventListener("input", () => {

const value = searchInput.value.toLowerCase();

cards.forEach(card => {

const title = card.querySelector("h3").textContent.toLowerCase();

if (title.startsWith(value)) {
card.style.display = "flex";
} else {
card.style.display = "none";
}

});

});

/* ---------------- PROJECT SORT ---------------- */

sortSelect.addEventListener("change", () => {

const arr = [...cards];

arr.sort((a, b) => {

const A = a.querySelector("h3").textContent.toLowerCase();
const B = b.querySelector("h3").textContent.toLowerCase();

if (sortSelect.value === "az") {
return A.localeCompare(B);
}

if (sortSelect.value === "za") {
return B.localeCompare(A);
}

return 0;

});

arr.forEach(card => container.appendChild(card));

});

/* ---------------- PROJECT EXPAND ---------------- */

titles.forEach(title => {

title.addEventListener("click", () => {

const card = title.closest(".project-card");
const desc = card.querySelector(".project-description");

/* Close other cards */

document.querySelectorAll(".project-card").forEach(otherCard => {

if (otherCard !== card) {

otherCard.classList.remove("open");

const otherDesc = otherCard.querySelector(".project-description");

if (otherDesc) {
otherDesc.style.maxHeight = null;
}

}

});

/* Toggle current */

card.classList.toggle("open");

if (card.classList.contains("open")) {
desc.style.maxHeight = desc.scrollHeight + "px";
}
else {
desc.style.maxHeight = null;
}

});

});

/* ---------------- CONTACT FORM VALIDATION ---------------- */

form.addEventListener("submit", (e) => {

e.preventDefault();

const name = form.querySelector("input[name='name']");
const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");

/* Validation */

if (!name.value || !email.value || !message.value) {

formMessage.style.color = "red";
formMessage.textContent = "Please fill in all fields.";

return;

}

/* Email validation */

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email.value)) {

formMessage.style.color = "red";
formMessage.textContent = "Please enter a valid email address.";

return;

}

/* Success */

formMessage.style.color = "green";
formMessage.textContent = "Message sent successfully.";

form.reset();

/* Clear message */

setTimeout(() => {

formMessage.textContent = "";

}, 2000);

});

});