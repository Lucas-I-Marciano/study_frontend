window.onload = () => {
  console.log("Loaded");

  const rows = document.querySelectorAll(".calculator-pad-row");
  const [e, mi, sin, deg] = rows[0].querySelectorAll("div");
  const [ac, back, div, mult] = rows[1].querySelectorAll("div");
  const [seven, eight, nine, minus] = rows[2].querySelectorAll("div");
  const [four, five, six, plus] = rows[3].querySelectorAll("div");
  const [one, two, three, equal] = rows[4].querySelectorAll("div");
  const [, zero, dot] = rows[5].querySelectorAll("div");

  const spanResult = document.querySelector(".calculator-screen-result");
  const spanMath = document.querySelector(".calculator-screen-math");

  // prettier-ignore
  const allButtons = [
    e,mi,sin,deg,ac,back,div,mult,seven,eight,nine,minus,
    four,five,six,plus,one,two,three,equal,zero,dot,
  ];

  let numberOne = "";
  let numberTwo = "";
  let isIncreasingNumberOne = true;
  let operation = "";
  let result = 0;
  let operationSignal = "";
  for (const element of allButtons) {
    element.addEventListener("click", () => {
      if (element === ac) {
        numberOne = "";
        numberTwo = "";
        operationSignal = "";
        isIncreasingNumberOne = true;
        spanResult.innerText = ".";
        spanMath.innerText = ".";
      } else if (element === div) {
        operation = "divide";
        operationSignal = "/";
        isIncreasingNumberOne = false;
      } else if (element === mult) {
        operation = "multiply";
        operationSignal = "*";
        isIncreasingNumberOne = false;
      } else if (element === plus) {
        operation = "sum";
        operationSignal = "+";
        isIncreasingNumberOne = false;
      } else if (element === minus) {
        operation = "subtract";
        operationSignal = "-";
        isIncreasingNumberOne = false;
      } else if (element === equal) {
        numberOne = parseFloat(numberOne);
        numberTwo = parseFloat(numberTwo);
        switch (operation) {
          case "divide":
            result = numberOne / numberTwo;
            break;
          case "multiply":
            result = numberOne * numberTwo;
            break;
          case "sum":
            result = numberOne + numberTwo;
            break;
          case "subtract":
            result = numberOne - numberTwo;
            break;
        }
        spanResult.innerText = result;
      } else {
        if (isIncreasingNumberOne) {
          numberOne = `${numberOne}${element.innerText}`;
        } else {
          numberTwo = `${numberTwo}${element.innerText}`;
        }
      }
      const isMathEmpty = `${numberOne}${operationSignal}${numberTwo}` === "";
      spanMath.innerText = isMathEmpty
        ? "."
        : `${numberOne}${operationSignal}${numberTwo}`;
    });
  }
};
