function categoryNumbersArray(array) {
  let qtyEven = 0;
  let qtyNotEven = 0;
  let qtyPositive = 0;
  let qtyNegative = 0;
  for (element of array) {
    if (element >= 0) {
      qtyPositive++;
    } else {
      qtyNegative++;
    }

    if (element % 2 == 0) {
      qtyEven++;
    } else {
      qtyNotEven++;
    }
  }
  console.log(`${qtyEven} Even numbers`);
  console.log(`${qtyNotEven} Not even number`);
  console.log(`${qtyPositive} Positive numbers`);
  console.log(`${qtyNegative} Negative numbers`);
}

categoryNumbersArray([-5, 0, -3, -4, 12]);
