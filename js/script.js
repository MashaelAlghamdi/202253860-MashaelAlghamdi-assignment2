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

const apiContainer = document.getElementById("api-data");
const factButton = document.getElementById("fact-btn");


/* ---------- DARK MODE ---------- */

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
body.classList.add("dark");
toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {

body.classList.toggle("dark");

const isDark = body.classList.contains("dark");

toggleBtn.textContent = isDark ? "☀️" : "🌙";

localStorage.setItem("theme", isDark ? "dark" : "light");

});


/* ---------- GREETING ---------- */

const hour = new Date().getHours();

let message = "";

if(hour < 12){
message = "Good Morning 👋🏻";
}
else if(hour < 18){
message = "Good Afternoon 👋🏻";
}
else{
message = "Good Evening 👋🏻";
}

greeting.textContent = message;

setTimeout(()=>{
greeting.style.opacity = "1";
},200);

setTimeout(()=>{
greeting.style.opacity = "0";
},2500);


/* ---------- EMPTY SEARCH MESSAGE ---------- */

const emptyMessage = document.createElement("p");
emptyMessage.textContent = "No projects found. Try another search.";
emptyMessage.style.textAlign = "center";
emptyMessage.style.marginTop = "20px";
emptyMessage.style.display = "none";

container.appendChild(emptyMessage);


/* ---------- PROJECT SEARCH ---------- */

searchInput.addEventListener("input", () => {

const value = searchInput.value.toLowerCase();
let visibleCount = 0;

cards.forEach(card => {

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.startsWith(value)){
card.style.display = "flex";
visibleCount++;
}else{
card.style.display = "none";
}

});

if(visibleCount === 0){
emptyMessage.style.display = "block";
}else{
emptyMessage.style.display = "none";
}

});


/* ---------- SORT PROJECTS ---------- */

sortSelect.addEventListener("change", () => {

const arr = [...cards];

arr.sort((a,b)=>{

const A = a.querySelector("h3").textContent.toLowerCase();
const B = b.querySelector("h3").textContent.toLowerCase();

if(sortSelect.value === "az"){
return A.localeCompare(B);
}

if(sortSelect.value === "za"){
return B.localeCompare(A);
}

return 0;

});

arr.forEach(card => container.appendChild(card));

});


/* ---------- PROJECT EXPAND ---------- */

titles.forEach(title => {

title.addEventListener("click", ()=>{

const card = title.closest(".project-card");
const desc = card.querySelector(".project-description");

document.querySelectorAll(".project-card").forEach(otherCard=>{

if(otherCard !== card){

otherCard.classList.remove("open");

const otherDesc = otherCard.querySelector(".project-description");

if(otherDesc){
otherDesc.style.maxHeight = null;
}

}

});

card.classList.toggle("open");

if(card.classList.contains("open")){
desc.style.maxHeight = desc.scrollHeight + "px";
}else{
desc.style.maxHeight = null;
}

});

});


/* ---------- CONTACT FORM VALIDATION ---------- */

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name = form.querySelector("input[name='name']");
const email = form.querySelector("input[name='email']");
const messageField = form.querySelector("textarea[name='message']");

if(!name.value || !email.value || !messageField.value){

formMessage.style.color = "red";
formMessage.textContent = "Please fill in all fields.";

return;

}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){

formMessage.style.color = "red";
formMessage.textContent = "Please enter a valid email address.";

return;

}

formMessage.style.color = "green";
formMessage.textContent = "Message sent successfully.";

form.reset();

setTimeout(()=>{
formMessage.textContent = "";
},2000);

});


/* ---------- RANDOM TECH FACT (BUTTON ONLY) ---------- */

if(apiContainer){
apiContainer.textContent = "Press the button to generate a fact.";
}

const languages = [
"Python_(programming_language)",
"Java_(programming_language)",
"JavaScript",
"C_(programming_language)",
"C%2B%2B",
"Rust_(programming_language)",
"Go_(programming_language)",
"Swift_(programming_language)",
"Kotlin_(programming_language)",
"TypeScript"
];

let shownFacts = new Set();

function loadFact(){

apiContainer.textContent = "Loading programming fact...";

setTimeout(() => fetchFact(0), 900);

}

function fetchFact(attempt){

if(attempt > 10){
apiContainer.textContent =
"Sorry, we couldn't load a new programming fact. Please try again.";
return;
}

const randomLang =
languages[Math.floor(Math.random() * languages.length)];

fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${randomLang}`)

.then(response => {

if(!response.ok){
throw new Error("API failed");
}

return response.json();

})

.then(data => {

const fact = data.extract.split(". ")[0] + ".";

if(shownFacts.has(fact)){
fetchFact(attempt + 1);
return;
}

shownFacts.add(fact);

apiContainer.textContent = fact;

})

.catch(() => {

apiContainer.textContent =
"Sorry, we couldn't load a programming fact. Please try again.";

});

}
if(factButton){
factButton.addEventListener("click", loadFact);
}

});