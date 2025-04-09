# JavaScript Concepts Refresher

## Overview
This repository is designed to refresh fundamental JavaScript concepts, including scope, mathematical operations, comparisons, switch cases, and functions. It aims to reinforce understanding and improve coding practices.

## Table of Contents
- Scope
- Mathematical Operations
- Comparisons
- Switch Case
- Functions

## Scope
Understanding scope is crucial in JavaScript. It defines the accessibility of variables within different parts of your code.

### Example
```javascript
let globalVar = "I am a global variable";

function localScope() {
  let localVar = "I am a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

localScope();
console.log(globalVar); // Accessible
console.log(localVar);  // Unaccessible
```

## Mathematical Operations
JavaScript supports various mathematical operations. Here are some examples:

### Example
```javascript
console.log(10 + 10); // Addition
console.log(10 - 5);  // Subtraction
console.log(10 * 10); // Multiplication
console.log(10 / 10); // Division
console.log(10 ** 2); // Exponentiation
console.log(10 - -5); // Unary negation
console.log(10 % 2);  // Modulus
```

## Comparisons
Comparisons are used to evaluate conditions in JavaScript.

### Example
```javascript
let a = 10;
let b = 5;

console.log(a > b);  // Greater than
console.log(a < b);  // Less than
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
```

## Switch Case
Switch case statements are used to perform different actions based on different conditions.

### Example
```javascript
let operation = "soma";

switch (operation) {
  case "soma":
    console.log("soma");
    break;
  case "subtrai":
    console.log("subtrai");
    break;
  case "divide":
    console.log("divide");
    break;
  default:
    console.log("nao damos suporte a essa operação");
    break;
}
```

## Functions
Functions help make your code more modular and reusable.

### Example
```javascript
function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

console.log(sum(10, 5)); // Output: 15
```

## Conclusion
This repository serves as a quick refresher on essential JavaScript concepts. By revisiting these topics, you can strengthen your understanding and improve your coding efficiency.

## Author
Lucas 

[GitHub](https://github.com/Lucas-I-Marciano) 

[Linkedin](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
