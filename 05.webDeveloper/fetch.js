import fetch from "node-fetch";

// 1o post
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();

console.log(data[0]);

// create post
const body = {
  title: "First post",
  body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ullam culpa in",
};

const response2 = await fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "post",
  body: JSON.stringify(body),
  headers: { "Content-Type": "application/json" },
});
const data2 = await response2.json();
console.log(data2); // { id: 101 }

//update post id:1
const responseToUpdate = await fetch(
  "https://jsonplaceholder.typicode.com/posts/1",
  {
    method: "patch",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }
);
const dataUpdated = await responseToUpdate.json();
console.log(dataUpdated);

// delete id:11
const responseToDelete = await fetch(
  "https://jsonplaceholder.typicode.com/posts/11",
  {
    method: "delete",
  }
);
const deletedData = await responseToDelete.json();
console.log(deletedData); // {}
