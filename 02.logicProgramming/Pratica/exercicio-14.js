function lowerNumber(array) {
  let lowerElement = array[0];
  let lowerElementPosition = 0;
  for (position in array) {
    if (array[position] < lowerElement) {
      lowerElement = array[position];
      lowerElementPosition = position;
    }
  }
  console.log(`Lower Value: ${lowerElement}`);
  console.log(`Lower Value Position: ${lowerElementPosition}`);
}

lowerNumber([1, 2, 3, 4, -5, 6, 7, 8, 9, 10]);
