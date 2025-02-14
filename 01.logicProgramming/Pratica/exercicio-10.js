function calculator(operation, number1, number2) {
  try {
    switch (operation) {
      case "soma":
        return number1 + number2;
        break;
      case "subtrai":
        return number1 - number2;
        break;
      case "multiplica":
        return number1 * number2;
        break;
      case "divide":
        return number1 / number2;
        break;
    }
  } catch {
    console.error("Erro");
  }
}

console.log(calculator("divide", 2, 0));
