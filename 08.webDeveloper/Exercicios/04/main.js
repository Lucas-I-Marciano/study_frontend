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
  for (const element of allButtons) {
    element.addEventListener("click", () => {
      if (element === ac) {
        numberOne = "";
      } else if (element === div) {
        console.log("Divide");
      } else if (element === mult) {
        console.log("Multiply");
      } else if (element === plus) {
        console.log("Sum");
      } else if (element === minus) {
        console.log("Subtract");
      } else {
        numberOne = `${numberOne}${element.innerText}`;
        console.log(numberOne);
      }
    });
  }
};
