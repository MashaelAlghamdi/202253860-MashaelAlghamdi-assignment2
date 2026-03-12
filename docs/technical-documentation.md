# Technical Documentation

## 1. Overview

This project is a static personal portfolio website developed using HTML, CSS, and JavaScript.  
The goal of the project is to demonstrate foundational front-end development skills, including responsive design, structured layout, and basic interactivity.

---

## 2. Technologies Used

- **HTML** – Used to structure the content and define semantic sections.
- **CSS** – Used for styling, layout, responsiveness, and visual design.
- **JavaScript** – Used to implement dark mode functionality and form interaction.

---

## 3. Website Structure

The website is divided into the following main sections:

### Navigation Bar
- Fixed at the top of the page.
- Contains links to different sections of the website.
- Includes a theme toggle button for dark mode.

### Hero Section
- Displays name and short introduction.
- Designed to act as the main entry point of the portfolio.

### About Section
- Brief description about me.
- Simple and clean layout for readability.

### Projects Section
- Contains project cards.
- Each card includes:
  - Project image
  - Title
  - Short description
- Uses Flexbox for layout.
- Includes hover effects and responsive stacking on smaller screens.

### Contact Section
- Includes a simple contact form.
- Displays a success message when the form is submitted.
- No backend integration (front-end only interaction).

---

## 4. Responsive Design

Responsiveness is implemented using:

- Flexbox for layout alignment.
- Media queries using `@media (max-width: 768px)` adjust layout behavior for tablets and mobile devices. The `.project-card` flex direction changes from row to column to maintain readability.
- Project cards stack vertically on smaller screens.
- Images resize to full width on mobile devices.


---

## 5. Dark Mode Implementation

Dark mode is implemented using:

- A toggle button in the navigation bar.
- Adding/removing a `dark` class to the `<body>` element.
- Separate CSS rules for dark mode styles.
- `localStorage` to remember the selected theme between page reloads.
- JavaScript uses `document.addEventListener("DOMContentLoaded")` to ensure DOM elements are fully loaded before event listeners are attached. The theme preference is stored using the browser's localStorage API as a key-value pair.


---

## 6. Performance Considerations

- No external frameworks were used.
- Lightweight CSS and minimal JavaScript.
- Images stored locally for stability.
- Images use the `loading="lazy"` attribute to improve page load performance.
- Clean and organized code structure.

---

## 7. Future Improvements

- Add animations or transitions.
- Add links to live projects or GitHub repositories.
- Deploy the project publicly.