const users = ["joao", "tiago", "luka", "rodrigo"];

// forEach

users.forEach((user, index) => {
  console.log(index, user);
});

// map

const arrayNumbers = [1, 5, 7, 2, 9];
const result = arrayNumbers.map((value) => {
  return value * 10;
});
console.log(result); // [ 10, 50, 70, 20, 90 ] -> It return a new array
