window.onload = () => {
  const form = document.querySelector("form");
  const resetButton = document.querySelector("button");
  const spanElement = document.querySelector("span");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const numberOne = parseFloat(event.target[0].value);
    const numberTwo = parseFloat(event.target[1].value);
    const operation = event.target[2].value;

    let result;
    switch (operation) {
      case "subtraction":
        result = numberOne - numberTwo;
        break;
      case "sum":
        result = numberOne + numberTwo;
        break;
      case "multiply":
        result = numberOne * numberTwo;
        break;
      case "divide":
        result = numberOne / numberTwo;
        break;
    }
    spanElement.innerText = result;
  });
};
