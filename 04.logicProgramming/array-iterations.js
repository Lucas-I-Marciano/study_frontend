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

// filter
const users2 = [
  { name: "João", role: "Professor", id: 2 },
  { name: "Juca", role: "Estudante", id: 10 },
  { name: "Márcia", role: "Estudante", id: 1 },
  { name: "Pedro", role: "Estudante", id: 3 },
  { name: "Matheus", role: "Professor", id: 99 },
  { name: "Júlia", role: "Estudante", id: 4 },
];

const student = users2.filter((objectData) => {
  return objectData.role === "Estudante";
});
console.log(student); // List just with "Estudante" role
