# Destructuring Assignment and Nested Functions

## Overview
This repository focuses on the Destructuring Assignment in JavaScript, both at a basic level and accessing deeper levels of an object. It also covers nested functions and their applications.

## Table of Contents
- Destructuring Assignment
- Nested Functions

## Destructuring Assignment
Destructuring Assignment allows you to unpack values from arrays or properties from objects into distinct variables.

### Example
```javascript
const person = {
  name: "Lucas",
  age: 26,
  address: {
    street: "Rua A",
    number: 915,
  },
};

const {
  name,
  age,
  address,
  address: { street },
} = person;

console.log(name); // "Lucas"
console.log(age); // 26
console.log(street); // "Rua A"
console.log(address); // { street: 'Rua A', number: 915 }
```

## Nested Functions
Nested functions are functions defined inside other functions. They can help in creating more modular and reusable code.

### Example
```javascript
const multiply = function (numberOne) {
  return function (numberTwo) {
    return numberOne * numberTwo;
  };
};

console.log(multiply(2)(3)); // Output: 6

const operations = {
  sum: function (a, b) {
    return a + b;
  },
  subtraction: function (a, b) {
    return a - b;
  },
};

console.log(operations["sum"](2, 4)); // Output: 6
```

## Conclusion
This repository provides a comprehensive look at Destructuring Assignment and Nested Functions in JavaScript. These concepts are essential for writing clean, efficient, and maintainable code.

## Author
Lucas Ioran Marciano

[GitHub](https://github.com/Lucas-I-Marciano)

[LinkedIn](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
