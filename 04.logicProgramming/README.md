# String and Array Methods, Iteration, and Promises

## Overview
This repository covers various string and array methods in JavaScript, including extraction, modification, and iteration techniques. It also explores Promises and asynchronous functions.

## Table of Contents
- String Methods
  - Extraction Methods
  - Modification Methods
- Array Methods
  - Basic Methods
  - Iteration Methods
- Promises and Asynchronous Functions

## String Methods

### Extraction Methods
JavaScript provides several methods to extract parts of a string.

#### Example
```javascript
const myName = "Lucas";
console.log(myName.slice(1, 4)); // "uca"

const fruits = "Apple, Banana, Kiwi";
console.log(fruits.slice(15, 99)); // "Kiwi"
console.log(fruits.substring(15)); // "Kiwi"
console.log(fruits.substr(7, 6)); // "Banana"
```

### Modification Methods
These methods allow you to modify the content of a string.

#### Example
```javascript
let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "my site")); // "Please visit my site!"

text = "Please visit MICROSOFT!";
console.log(text.replace("Microsoft", "my site")); // "Please visit MICROSOFT!"

text = "Please visit MICROSOFT microsoft!";
console.log(text.replace(/Microsoft/gi, "my site")); // "Please visit my site my site!"

let textToPad = "5";
console.log(textToPad.padStart(4, 0)); // "0005"
console.log(textToPad.padEnd(4, 0)); // "5000"
```

## Array Methods

### Basic Methods
These methods are used for basic array operations.

#### Example
```javascript
const boys = ["joao", "tiago", "sidemar"];
const girls = ["graciele"];
const boysAndGirls = boys.concat(girls);
console.log(boysAndGirls); // ["joao", "tiago", "sidemar", "graciele"]

console.log(boysAndGirls.join(", ")); // "joao, tiago, sidemar, graciele"

boysAndGirls.push("Lucas");
console.log(boysAndGirls); // ["joao", "tiago", "sidemar", "graciele", "Lucas"]

boysAndGirls.pop();
console.log(boysAndGirls); // ["joao", "tiago", "sidemar", "graciele"]

boysAndGirls.shift();
console.log(boysAndGirls); // ["tiago", "sidemar", "graciele"]

boysAndGirls.unshift("joao");
console.log(boysAndGirls); // ["joao", "tiago", "sidemar", "graciele"]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.slice(1)); // ["Orange", "Apple", "Mango"]

fruits.splice(1, 0, "Watermelon", "Kiwi");
console.log(fruits); // ["Banana", "Watermelon", "Kiwi", "Orange", "Apple", "Mango"]

fruits.splice(0, 2);
console.log(fruits); // ["Kiwi", "Orange", "Apple", "Mango"]

console.log(fruits.reverse()); // ["Mango", "Apple", "Orange", "Kiwi"]
```

### Iteration Methods
These methods are used to iterate over arrays.

#### Example
```javascript
const users = ["joao", "tiago", "luka", "rodrigo"];
users.forEach((user, index) => {
  console.log(index, user);
});

const arrayNumbers = [1, 5, 7, 2, 9];
const result = arrayNumbers.map(value => value * 10);
console.log(result); // [10, 50, 70, 20, 90]

const users2 = [
  { name: "João", role: "Professor", id: 2 },
  { name: "Juca", role: "Estudante", id: 10 },
  { name: "Márcia", role: "Estudante", id: 1 },
  { name: "Pedro", role: "Estudante", id: 3 },
  { name: "Matheus", role: "Professor", id: 99 },
  { name: "Júlia", role: "Estudante", id: 4 },
];

const students = users2.filter(user => user.role === "Estudante");
console.log(students); // List of students

const found = users2.find(user => user.role === "Estudante");
console.log(found); // First student found

const isEveryoneStudent = users2.every(user => user.role === "Estudante");
console.log(isEveryoneStudent); // false

const isAnyoneStudent = users2.some(user => user.role === "Estudante");
console.log(isAnyoneStudent); // true

const sortedUsers = users2.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

const numbersToSum = [10, 20, 30, 40, 50];
const sum = numbersToSum.reduce((acc, value) => acc + value, 0);
console.log(sum); // 150

const products = [
  { name: "banana", category: "fruta" },
  { name: "alface", category: "verdura" },
  { name: "maçã", category: "fruta" },
  { name: "cenoura", category: "legume" },
  { name: "pêssego", category: "fruta" },
  { name: "couve", category: "verdura" },
];
const categories = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});
console.log(categories); // { fruta: 3, verdura: 2, legume: 1 }
```

## Promises and Asynchronous Functions
Promises and asynchronous functions are essential for handling asynchronous operations in JavaScript.

### Example
```javascript
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("this first promise was NOT resolved!");
    }, 1500);
  });
};

const p2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this second promise was resolved!");
    }, 1500);
  });
};

async function asyncFunction() {
  try {
    console.log(await p1());
  } catch (error) {
    console.log(error);
  }
}

asyncFunction();
```

## Conclusion
This repository provides a comprehensive overview of string and array methods, iteration techniques, and asynchronous programming in JavaScript. These concepts are fundamental for writing efficient and effective code.

## Author
Lucas Ioran Marciano

[LinkedIn](https://www.linkedin.com/in/lucas-ioran-marciano/)

[GitHub](https://github.com/Lucas-I-Marciano)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
