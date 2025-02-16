const person = {
  name: "Lucas",
  age: 26,
  address: {
    street: "Rua A",
    number: 915,
  },
};

const {
  name,
  age,
  address,
  address: { street },
} = person;

console.log(name); // "Lucas"
console.log(age); // 26

console.log(street); // "Rua A"
console.log(address); // { street: 'Rua A', number: 915 } -> Fixed!
