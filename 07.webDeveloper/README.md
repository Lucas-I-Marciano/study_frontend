# Responsive Design and SASS

## Overview
This repository focuses on responsive design techniques, including hover effects, nth-child styling, and handling disabled and empty states. It also covers SASS (Syntactically Awesome Style Sheets) for advanced CSS styling and DOM manipulation with JavaScript.

## Table of Contents
- Video Demonstration
- Responsive Design
  - Hover Effects
  - Nth-child Styling
  - Disabled and Empty States
- SASS
  - Using SASS
  - BEM Methodology
- DOM Manipulation
- Conclusion

## Video Demonstration
Here is a video demonstration of the landing page developed using SASS:

https://github.com/user-attachments/assets/76911296-bb1e-4e23-9a03-c140a6b667f5

https://github.com/user-attachments/assets/cad117c9-bbbb-4ea5-8685-0e50718eeb9e

## Responsive Design

### Hover Effects
Change the color of a square when the mouse hovers over it.

#### Example
```css
.square:hover {
  background-color: blue;
}
```

### Nth-child Styling
Style child elements based on their position.

#### Example
```css
.row-white .square:nth-child(2n) {
  background-color: black;
}
```

### Disabled and Empty States
Style elements based on their state.

#### Example
```css
button:disabled {
  background-color: rgb(100, 99, 99);
  color: red;
}

.empty-div:empty {
  width: 400px;
  height: 10px;
  background-color: aqua;
  margin: 5px 0 0 2.5px;
}
```

## SASS

### Using SASS
SASS allows for more advanced CSS styling and organization.

#### Example
```scss
@use "_footer";
@use "_header";
@use "style";
@use "_variables" as variable;
```

### BEM Methodology
Using BEM (Block, Element, Modifier) for structured and maintainable CSS.

#### Example
```scss
.mobile-menu {
  color: white;
  font-size: 16px;
  line-height: 18.75px;
  position: fixed;
  top: 0;
  background-color: variable.$backgroundColor;
  width: 100%;
  height: 100vh;
  padding: 81.5px 16px;
  display: flex;
  flex-direction: column;

  &-text {
    font-family: "Roboto", sans-serif;
    margin-bottom: 24px;
    text-decoration: none;

    &:visited {
      color: white;
    }
  }
}
```

## DOM Manipulation
Using JavaScript to manipulate the DOM and create interactive elements.

#### Example
```javascript
document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('open');
});
```

## Conclusion
This repository demonstrates responsive design techniques, advanced CSS styling with SASS, and DOM manipulation with JavaScript. These skills are essential for creating modern, responsive, and interactive web pages.

## Author
[Lucas Ioran Marciano](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
