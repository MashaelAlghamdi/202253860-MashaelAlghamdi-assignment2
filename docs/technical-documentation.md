# Technical Documentation

## 1. Overview

This project is a static personal portfolio website developed using **HTML, CSS, and JavaScript**.  
The goal of the project is to demonstrate foundational front-end development skills including semantic structure, responsive layout design, and interactive user interface behavior.

The website presents personal information, showcases academic projects, and implements several interactive features using JavaScript. These features include theme switching, project filtering, sorting, expandable project descriptions, form validation, and dynamic data loading from an external API.

The project focuses on building a clean and user-friendly interface without relying on external frameworks.

---

## 2. Technologies Used

### HTML

HTML is used to structure the content of the website and organize the page into logical sections such as navigation, hero, projects, and contact.

### CSS

CSS is responsible for visual styling and layout. It is used to implement:

- Page layout and spacing
- Flexbox alignment
- Responsive design
- Hover effects and transitions
- Light and dark theme styling

### JavaScript

JavaScript provides interactive functionality including:

- Dark mode toggle
- Theme persistence using `localStorage`
- Project search and filtering
- Project sorting
- Expandable project descriptions
- Contact form validation
- Fetching data from an external API

### Wikipedia REST API

The **Wikipedia REST API** is used to fetch and display a random programming fact.  
This demonstrates asynchronous data handling using JavaScript's `fetch()` function.

---

## 3. Website Structure

The website is organized into several main sections.

### Navigation Bar

The navigation bar is fixed at the top of the page and provides quick access to the major sections of the website.

Features include:

- Links to **About**, **Projects**, and **Contact**
- Smooth navigation between sections
- A **theme toggle button** for switching between light and dark mode

---

### Hero Section

The hero section serves as the introduction to the portfolio.

It includes:

- Developer name
- Short introduction
- A **dynamic greeting message** based on the current time of day (morning, afternoon, evening)

---

### Random Tech Fact Section

This section demonstrates API integration.

Features include:

- A button that generates a random programming fact
- Data fetched from the **Wikipedia API**
- A loading message displayed while retrieving data
- Error handling if the API request fails

---

### About Section

The About section provides a short description of the developer and highlights interests and goals.

The layout is designed to remain simple and readable.

---

### Projects Section

The projects section displays academic work using **interactive project cards**.

Each project card includes:

- Project image
- Project title
- Expandable project description

#### Expandable Project Cards

Project descriptions are hidden by default and expand when the project title is clicked.  
JavaScript dynamically adjusts the height of the description using `scrollHeight` and CSS transitions to create a smooth expansion animation.

#### Project Search

A search input allows users to filter projects by title.

Features include:

- Real-time filtering using JavaScript
- Case-insensitive search
- Hiding projects that do not match the search query
- Displaying a **"No projects found"** message when no results match the search

#### Project Sorting

Projects can be sorted alphabetically using a dropdown menu.

Sorting options include:

- **Default order**
- **A → Z**
- **Z → A**

Sorting is implemented by comparing project titles and dynamically rearranging project cards in the DOM.

---

### Contact Section

The contact section includes a form that allows users to send a message.

The form contains:

- Name input field
- Email input field
- Message textarea
- Submit button

#### Form Validation

JavaScript performs client-side validation before submission.

Validation checks include:

- Ensuring all fields are filled
- Verifying the email format using a regular expression

If validation fails, an **error message** is displayed to the user.  
If the form passes validation, a **success message** confirms that the message was sent.

Currently the form demonstrates **front-end validation only** and does not connect to a backend service.

---

## 4. Responsive Design

Responsive design ensures the website works well on different screen sizes.

### Flexbox

Flexbox is used for aligning elements and structuring layouts such as project cards and navigation elements.

### Media Queries

The following media query is used to adjust layouts for smaller screens:

```css
@media (max-width: 768px)
```

When the screen width is below **768px**:

- Project cards switch from horizontal layout to vertical layout
- Images expand to fit the screen width
- Text spacing adjusts for better readability

These changes allow the website to function properly on desktops, tablets, and mobile devices.

---

## 5. Dark Mode Implementation

Dark mode allows users to switch between light and dark themes.

Implementation details include:

- A theme toggle button in the navigation bar
- JavaScript adds or removes a `dark` class on the `<body>` element
- CSS selectors such as `body.dark .navbar` override default styles

### Theme Persistence

The selected theme is stored using the browser's **localStorage API**.

Example values stored in localStorage:

```
theme = "dark"
theme = "light"
```

When the page loads, JavaScript checks the stored theme preference and applies the correct theme automatically.

The script initializes after the DOM loads using:

```javascript
document.addEventListener("DOMContentLoaded")
```

---

## 6. Performance Considerations

Several practices were applied to keep the website lightweight and efficient.

These include:

- Avoiding heavy front-end frameworks
- Keeping JavaScript minimal and focused
- Organizing CSS and JavaScript files clearly
- Storing images locally for reliable loading
- Avoiding unnecessary external libraries

These decisions help improve performance and maintainability.

