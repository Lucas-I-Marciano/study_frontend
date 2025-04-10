# Form Handling, DOM Manipulation, and Calculator Project

## Overview
This repository covers form handling with various input types, DOM manipulation techniques, and the creation of a task tracker and a calculator. It includes examples of using the Fetch API and implementing a pixel-perfect design.

## Table of Contents
- Video Demonstration
- Form Handling
  - Input Types
- DOM Manipulation
- Task Tracker
- Calculator Project
- Conclusion

## Video Demonstration
Here is a video demonstration of the calculator project:

https://github.com/user-attachments/assets/37fde2a6-6b3c-4520-b3b7-4989e995e479

## Form Handling

### Input Types
HTML forms support various input types for different data collection needs.

#### Example
```html
<form>
  <input type="text" />
  <input type="number" />
  <input type="color" />
  <input type="checkbox" />
  <input type="date" />
  <input type="file" />
  <input type="password" />
  <input name="linguagem" type="radio" />
  <input name="linguagem" type="radio" />
  <input type="range" />
  <input type="submit" />
  <button type="submit">enviar</button>

  <label for="email">Digite seu email</label>
  <input placeholder="email@email.com" name="email" type="text" />
  <select name="languages">
    <option value="js">js</option>
    <option value="php">php</option>
  </select>
</form>
```

## DOM Manipulation
Manipulating the DOM using JavaScript methods.

#### Example
```javascript
window.onload = () => {
  const paragrafo = document.createElement("p");
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(paragrafo);
  body.removeChild(paragrafo);

  const paragrafo2 = document.getElementById("paragrafo");

  setTimeout(() => {
    paragrafo2.innerText = "Meu paragrafo novo deu nós";
  }, 1000);

  setTimeout(() => {
    paragrafo2.innerHTML = "Meu paragrafo <span style='color: red'>novo</span>";
  }, 2000);

  const input = document.getElementById("name");
  setTimeout(() => {
    input.setAttribute("value", "joao");
  }, 1000);

  setTimeout(() => {
    input.removeAttribute("value");
  }, 2000);

  const container = document.querySelector(".container");
  const paragrafo3 = document.querySelector("#paragrafo");
  const body2 = document.querySelector("body");

  const containers = document.querySelectorAll(".container");
};
```

## Task Tracker
Creating a task tracker that links form input with the Fetch API.

### HTML
```html
<body>
  <main>
    <section>
      <form action="">
        <label for="task">Título da minha tarefa</label>
        <input type="text" name="task" />
      </form>
      <ul></ul>
    </section>
  </main>
  <script src="main.js"></script>
</body>
```

### JavaScript
```javascript
window.onload = () => {
  const form = document.querySelector("form");
  const ulElement = document.querySelector("ul");
  let count = 0;
  form.addEventListener("submit", async (event) => {
    count++;
    event.preventDefault();
    const taskTitle = event.target[0].value;

    const liElement = document.createElement("li");
    liElement.innerText = `${count}: ${taskTitle}`;
    ulElement.appendChild(liElement);

    try {
      if (count % 3 === 0) {
        const response = await (
          await fetch("https://jsonplaceholder.t.com/todos", {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify({ title: taskTitle }),
          })
        ).json();
      }
      const response = await (
        await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          "Content-Type": "application/json",
          body: JSON.stringify({ title: taskTitle }),
        })
      ).json();
    } catch (error) {
      liElement.remove();
      alert(error);
    }
  });
};
```

## Calculator Project
Creating a calculator from scratch using HTML, CSS, and JavaScript.

### HTML

### CSS Example
```css
.calculator-pad-row-square {
  background-color: #303136;
  height: 62px;
  width: 62px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculator-pad-row-square:hover {
  background-color: antiquewhite;
  box-shadow: 6px 6px;
  font-weight: bolder;
}

.calculator-pad-row-square__blue {
  background-color: #005db2;
}

.calculator-pad-row-square__height {
  height: 40px;
}
...
```

### JavaScript Example
```javascript
window.onload = () => {
  console.log("Loaded");

  const rows = document.querySelectorAll(".calculator-pad-row");
  const [e, mi, sin, deg] = rows[0].querySelectorAll("div");
  const [ac, back, div, mult] = rows[1].querySelectorAll("div");
  const [seven, eight, nine, minus] = rows[2].querySelectorAll("div");
  const [four, five, six, plus] = rows[3].querySelectorAll("div");
  const [one, two, three, equal] = rows[4].querySelectorAll("div");
  const [, zero, dot] = rows[5].querySelectorAll("div");
  ...
```

## Conclusion
This repository demonstrates form handling, DOM manipulation, and the creation of interactive web applications. These skills are essential for building dynamic and user-friendly web pages.

## Author
[Lucas Ioran Marciano](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
