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

//filter
const found = users2.find((objectData) => {
  return objectData.role === "Estudante";
});
console.log(found); // { name: 'Juca', role: 'Estudante', id: 10 } -> Just one single register

//every & any
const isEveryoneEstudante = users2.every(
  (objectData) => objectData.role === "Estudante"
);
console.log(isEveryoneEstudante); // false
const isAnyoneEstudante = users2.some(
  (objectData) => objectData.role === "Estudante"
);
console.log(isAnyoneEstudante); // true

//sort
const sortedUsers = users2.sort((a, b) => {
  // a = one element, b = second element
  if (a.id < b.id) return -1; // Do not do anything
  if (a.id > b.id) return 1; // Change position of a and b
  if (a.id === b.id) return 0;
});
console.log(sortedUsers);

const sortedUsers2 = users2.sort((a, b) => a.id - b.id); // Because this subtraction will return negative or positive numbers
console.log(sortedUsers2);

//reduce -> Reduce an array to an object (Array, number...)
const numbersToSum = [10, 20, 30, 40, 50];
const sum = numbersToSum.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(sum);

const products = [
  { name: "banana", category: "fruta" },
  { name: "alface", category: "verdura" },
  { name: "maçã", category: "fruta" },
  { name: "cenoura", category: "legume" },
  { name: "pêssego", category: "fruta" },
  { name: "couve", category: "verdura" },
];
const categories = products.reduce(
  (acc, objProduct) => {
    acc[objProduct["category"]]++;
    return acc;
  },
  { fruta: 0, verdura: 0, legume: 0 }
);
console.log(categories);
