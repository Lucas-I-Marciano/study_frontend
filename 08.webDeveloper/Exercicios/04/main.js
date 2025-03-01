window.onload = () => {
  console.log("Loaded");

  const rows = document.querySelectorAll(".calculator-pad-row");
  const [e, mi, sin, deg] = rows[0].querySelectorAll("div");
  const [ac, back, div, mult] = rows[1].querySelectorAll("div");
  const [seven, eight, nine, minus] = rows[2].querySelectorAll("div");
  const [four, five, six, plus] = rows[3].querySelectorAll("div");
  const [one, two, three, equal] = rows[4].querySelectorAll("div");
  const [, zero, dot] = rows[5].querySelectorAll("div");

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
  for (const element of allButtons) {
    element.addEventListener("click", () => {
      if (element === ac) {
        numberOne = "";
        isIncreasingNumberOne = true;
      } else if (element === div) {
        operation = "divide";
        isIncreasingNumberOne = false;
      } else if (element === mult) {
        operation = "multiply";
        isIncreasingNumberOne = false;
      } else if (element === plus) {
        operation = "sum";
        isIncreasingNumberOne = false;
      } else if (element === minus) {
        operation = "subtract";
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
        console.log(result);
      } else {
        if (isIncreasingNumberOne) {
          numberOne = `${numberOne}${element.innerText}`;
          console.log(numberOne);
        } else {
          numberTwo = `${numberTwo}${element.innerText}`;
          console.log(numberOne);
          console.log(numberTwo);
        }
      }
    });
  }
};
