# Fetch API and Node.js File System

## Overview
This repository focuses on using the Fetch API to make HTTP requests and working with the Node.js File System (fs) module. It includes examples of making GET, POST, and PATCH requests, as well as reading and processing CSV files.

## Table of Contents
- Project Setup
- Fetch API
  - GET Request
  - POST Request
  - PATCH Request
- Node.js File System
  - Reading and Processing CSV Files

## Project Setup
Initialize the project and install the necessary dependencies.

### Example
```json
{
  "name": "05.webdeveloper",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "type": "module",
  "dependencies": {
    "console-input": "^1.0.2",
    "node-fetch": "^3.3.2"
  }
}

```

## Fetch API
The Fetch API is used to make HTTP requests to servers.

### GET Request
Fetch data from a fake API.

#### Example
```javascript
import fetch from "node-fetch";

const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();
console.log(data);
```

### POST Request
Send data to the server.

#### Example
```javascript
const body = { title: "foo", body: "bar", userId: 1 };

const response2 = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" },
});
const data2 = await response2.json();
console.log(data2);
```

### PATCH Request
Update data on the server.

#### Example
```javascript
const body = { title: "foo" };

const responseToUpdate = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  {
    method: "patch",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }
);
const updatedData = await responseToUpdate.json();
console.log(updatedData);
```

## Node.js File System
The Node.js File System (fs) module allows you to work with the file system on your computer.

### Reading and Processing CSV Files
Read and process CSV files using the `fs/promises` module.

#### Example
```javascript
import { open } from "node:fs/promises";

const readingFileAddingLinesArray = async (path) => {
  const toReturn = [];
  const file = await open(path);

  for await (const line of file.readLines()) {
    toReturn.push(line);
  }
  return toReturn;
};

const getHeadersCsv = (allLines) => {
  return allLines[0].split(",").filter((element) => element !== "");
};

const getArrayOfObjects = (linesWithoutHeader, headers) => {
  return linesWithoutHeader.map((line) => {
    const obj = {};
    line.split(",").forEach((value, index) => {
      obj[headers[index]] = headers[index] === "preco" ? `R$${value}`.replace(".", ",") : value;
    });
    return obj;
  });
};

const lines = await readingFileAddingLinesArray("./05.webDeveloper/Project/lista.csv");
const headers = getHeadersCsv(lines);
const formatedLines = lines.slice(1);
const myArray = getArrayOfObjects(formatedLines, headers);
console.log(myArray);
```

## Conclusion
This repository demonstrates how to use the Fetch API for making HTTP requests and the Node.js File System module for reading and processing files. These skills are essential for backend development and working with external APIs.

## Author
[Lucas Ioran Marciano](https://www.linkedin.com/in/lucas-ioran-marciano/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
