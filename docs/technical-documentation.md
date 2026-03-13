# Technical Documentation

## 1. Overview

This project is a static personal portfolio website developed using **HTML, CSS, and JavaScript**.  
The purpose of the project is to demonstrate foundational front-end development skills including structured layout design, responsive styling, and interactive user interface elements.

The website presents personal information, showcases academic projects, and includes several interactive features implemented with JavaScript such as theme switching, project filtering, and dynamic data loading.

---

## 2. Technologies Used

- **HTML** – Provides the semantic structure of the website and organizes content into sections.
- **CSS** – Handles layout design, styling, responsive behavior, and visual effects such as hover animations and theme variations.
- **JavaScript** – Adds interactivity to the website including dark mode functionality, project searching and sorting, expandable project cards, form validation, and API data retrieval.
- **Wikipedia REST API** – Used to fetch and display random programming facts as an example of basic data handling.

---

## 3. Website Structure

The website is divided into several main sections:

### Navigation Bar
- Fixed at the top of the page for easy navigation.
- Contains links to the **About**, **Projects**, and **Contact** sections.
- Includes a **theme toggle button** that allows users to switch between light and dark mode.

### Hero Section
- Displays the name and a short introduction.
- Includes a dynamic greeting message based on the current time of day.
- Acts as the main entry point of the portfolio.

### Random Tech Fact Section
- Displays a random programming fact retrieved from the Wikipedia API.
- A button allows the user to generate a new fact.
- Demonstrates basic API usage and asynchronous JavaScript.

### About Section
- Provides a short description about the developer.
- Designed with a simple and readable layout.

### Projects Section
- Displays project cards representing academic projects.
- Each card includes:
  - Project image
  - Project title
  - Expandable project description
- Cards can expand to reveal additional information.
- Includes additional interaction features:
  - **Project search** to filter projects by name.
  - **Project sorting** (A → Z or Z → A).
- Uses **Flexbox** for layout and responsive behavior.

### Contact Section
- Includes a simple contact form.
- JavaScript validates that all fields are filled and that the email address is in a valid format.
- Displays feedback messages when the form is submitted.
- The form currently demonstrates front-end validation only and does not connect to a backend service.

---

## 4. Responsive Design

Responsiveness is implemented using modern CSS techniques.

- **Flexbox** is used for layout alignment and spacing.
- **Media queries** (`@media (max-width: 768px)`) adjust the layout for smaller screens.
- On mobile devices:
  - Project cards switch from horizontal layout to vertical stacking.
  - Images automatically resize to fit the screen width.
  - Text remains readable and well-spaced.

These adjustments ensure the website remains usable across desktops, tablets, and mobile devices.

---

## 5. Dark Mode Implementation

Dark mode is implemented through a combination of CSS and JavaScript.

- A **theme toggle button** allows the user to switch between light and dark themes.
- JavaScript adds or removes a `dark` class from the `<body>` element.
- CSS uses more specific selectors (e.g., `body.dark .navbar`) to override default styles when dark mode is active.
- The selected theme is saved using the browser's **localStorage** API so that the user's preference persists after refreshing or reopening the page.
- The script runs after the DOM loads using `document.addEventListener("DOMContentLoaded")`.

---

## 6. Performance Considerations

Several simple practices were applied to keep the website lightweight and efficient.

- No external JavaScript frameworks were used.
- CSS and JavaScript files are organized and minimal.
- Images are stored locally to ensure reliable loading.
- The website avoids unnecessary libraries to keep load times low.
- Code is structured and commented to maintain readability and maintainability.

---

## 7. Future Improvements

Potential improvements for future versions of the portfolio include:

- Adding links to GitHub repositories or live project demos.
- Improving accessibility (ARIA labels and keyboard navigation).
- Adding more animations or micro-interactions.
- Integrating a backend service for the contact form.
- Deploying the portfolio publicly using platforms such as **GitHub Pages**, **Netlify**, or **Vercel**.