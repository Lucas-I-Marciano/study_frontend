import fetch from "node-fetch";

// 1o post
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();

console.log(data[0]);
