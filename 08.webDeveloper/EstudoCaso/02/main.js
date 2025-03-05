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
