const myFunction = (operation) => {
  switch (operation) {
    case "soma":
      return (numberOne) => {
        return (numberTwo) => numberTwo + numberOne;
      };
  }
};

console.log(myFunction("soma")(3)(5));
