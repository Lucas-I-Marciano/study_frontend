window.onload = () => {
  const form = document.querySelector("form");
  const ulElement = document.querySelector("ul");
  let count = 0;
  form.addEventListener("submit", async (event) => {
    count++;
    event.preventDefault();
    const taskTitle = event.target[0].value;

    ulElement.innerHTML += `<li>${count}: ${taskTitle}</li> `;

    try {
      if (count === 3) {
        throw new Error("Three brings bad lucky");
      }
      const response = await (
        await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          body: JSON.stringify({ title: taskTitle }),
        })
      ).json();
    } catch (error) {
      const liArray = ulElement.querySelectorAll("li");
      const lastLiElement = liArray[liArray.length - 1];
      lastLiElement.remove();
      alert(error);
    }
  });
};
