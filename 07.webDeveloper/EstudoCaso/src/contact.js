window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = event.target[0];
    const emailInput = event.target[1];
    const messageInput = event.target[2];

    const data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
  });
};
