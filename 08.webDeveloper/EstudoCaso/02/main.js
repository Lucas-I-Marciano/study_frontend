window.onload = () => {
  const form = document.querySelector("form");
  const ulElement = document.querySelector("ul");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const taskTitle = event.target[0].value;

    ulElement.innerHTML += `<li>${taskTitle}</li> `;

    try {
      const response = await (
        await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          body: JSON.stringify({ title: taskTitle }),
        })
      ).json();
    } catch (error) {
      alert(error);
    }
  });
};
