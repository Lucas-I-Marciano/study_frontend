window.onload = () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const taskTitle = event.target.querySelector("input").value;

    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: { title: taskTitle },
      })
    ).json();
    console.log(response);
  });
};
