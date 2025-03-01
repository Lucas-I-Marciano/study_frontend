window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const taskTitle = event.target[0].value;

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
