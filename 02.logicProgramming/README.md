# JavaScript Built-in Classes

## Overview
This repository explores instances of built-in JavaScript classes such as Array, Object, and Date. It also includes an exercise to classify an array of numbers into even, odd, positive, and negative categories.

## Table of Contents
- Instances of Built-in Classes
- Array and Object Concepts
- Number Classification Exercise

## Instances of Built-in Classes
JavaScript provides several built-in classes that are essential for various operations. Here are some examples:

### Example
```javascript
const myName = "Lucas";
const myNumber = 5;
const myArray = new Array(); // []
const myObject = new Object(); // {}
const myDate = new Date(); // Current date and time
```

## Array and Object Concepts
Combining arrays and objects can be powerful for data manipulation and classification.

## Number Classification Exercise
This exercise classifies an array of numbers into even, odd, positive, and negative categories.

### Example
```javascript
function categoryNumbersArray(array) {
  let qtyEven = 0;
  let qtyNotEven = 0;
  let qtyPositive = 0;
  let qtyNegative = 0;
  for (let element of array) {
    if (element >= 0) {
      qtyPositive++;
    } else {
      qtyNegative++;
    }

    if (element % 2 === 0) {
      qtyEven++;
    } else {
      qtyNotEven++;
    }
  }
  console.log(`${qtyEven} Even numbers`);
  console.log(`${qtyNotEven} Not even numbers`);
  console.log(`${qtyPositive} Positive numbers`);
  console.log(`${qtyNegative} Negative numbers`);
}

categoryNumbersArray([-5, 0, -3, -4, 12]);
```

## Conclusion
This repository provides a practical approach to understanding and utilizing JavaScript's built-in classes. The number classification exercise demonstrates how to combine array and object concepts effectively.

## Author
Lucas Ioran Marciano

[GitHub](https://github.com/Lucas-I-Marciano)

[LinkedIn](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
