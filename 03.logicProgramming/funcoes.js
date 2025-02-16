const multiply = function (numberOne) {
  return function (numberTwo) {
    return numberOne * numberTwo;
  };
};

console.log(multiply(2)); // [Function (anonymous)] -> I can call this function -> ()
// function (numberTwo) {
//     return 2 * numberTwo;
//   };

console.log(multiply(2)(4)); // 8 -> I'm calling my function
