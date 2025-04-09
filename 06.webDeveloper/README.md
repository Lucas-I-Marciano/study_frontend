# HTML and CSS Basics

## Overview
This repository covers the basics of HTML and CSS, including semantic tags, styling elements, and the initial concepts of Flexbox. It also includes a demonstration of pixel-perfect design implementation.

## Table of Contents
- Pixel Perfect Design
- HTML Basics
  - Head Tags
  - Body Tags
  - Semantic Tags
- CSS Basics
  - Global Styles
  - Tag Styling
  - ID Styling
  - Class Styling
  - Nested Styling
  - Flexbox

## Pixel Perfect Design
Implementing a pixel-perfect design ensures that the web page matches the design specifications exactly.

### Example
https://github.com/user-attachments/assets/f48e3850-3979-465c-991f-b5cf10140726

## HTML Basics

### Head Tags
The `<head>` tag contains meta-information about the HTML document.

#### Example
```html
<head>
  <title>My Web Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
```

### Body Tags
The `<body>` tag contains the content of the HTML document.

#### Example
```html
<body>
  <header>Header Content</header>
  <main>Main Content</main>
  <aside>Aside Content</aside>
  <footer>Footer Content</footer>
</body>
```

### Semantic Tags
Using semantic tags helps improve the readability and accessibility of your HTML.

#### Example
```html
<section>
  <h1>Section Title</h1>
  <p>Section content...</p>
</section>
<aside>
  <h2>Aside Title</h2>
  <p>Aside content...</p>
</aside>
```

## CSS Basics

### Global Styles
Applying global styles to all elements.

#### Example
```css
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}
```

### Tag Styling
Styling specific HTML tags.

#### Example
```css
h1 {
  color: red;
  font-size: 50px;
  font-weight: lighter;
  line-height: 100px;
}
```

### ID Styling
Styling elements with specific IDs.

#### Example
```css
#main-section {
  border: 2px solid black;
  background-color: antiquewhite;
  padding: 20px;
  margin: 20px;
}
```

### Class Styling
Styling elements with specific classes.

#### Example
```css
.blue-square {
  background-color: aqua;
  height: 100px;
  width: 100px;
  margin: 10px;
}
```

### Nested Styling
Styling nested elements.

#### Example
```css
.blue-square p {
  color: red;
}
```

### Flexbox
Using Flexbox for layout.

#### Example
```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  flex-grow: 1;
  order: 2;
}
```


```html
<!-- Add your pixel-perfect design example here -->
```

## Conclusion
This repository provides a comprehensive overview of HTML and CSS basics, including semantic tags, styling techniques, and Flexbox. These concepts are essential for creating well-structured and visually appealing web pages.

## Author
[Lucas Ioran Marciano](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
