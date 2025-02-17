// concat

const boys = ["joao", "tiago", "sidemar"];
const girls = ["graciele"];

const boysAndGirls = boys.concat(girls);
console.log(boysAndGirls); // [ 'joao', 'tiago', 'sidemar', 'graciele' ]

// join
console.log(boysAndGirls.join(", ")); // "joao, tiago, sidemar, graciele"

// push
boysAndGirls.push("Lucas");
console.log(boysAndGirls); // [ 'joao', 'tiago', 'sidemar', 'graciele', 'Lucas' ]

// pop
boysAndGirls.pop();
console.log(boysAndGirls); // [ 'joao', 'tiago', 'sidemar', 'graciele' ] -> Remove last item

// shift and unshift
boysAndGirls.shift();
console.log(boysAndGirls); // [ 'tiago', 'sidemar', 'graciele' ] -> Remove first item
boysAndGirls.unshift("joao");
console.log(boysAndGirls); // [ 'joao', 'tiago', 'sidemar', 'graciele' ] -> Add on first postion

// slice and splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliced = fruits.slice(1);
console.log(sliced); // [ 'Orange', 'Apple', 'Mango' ]
fruits.splice(1, 0, "Watermellon", "Kiwi");
console.log(fruits); // [ 'Banana', 'Watermellon', 'Kiwi', 'Orange', 'Apple', 'Mango' ]
fruits.splice(0, 2);
console.log(fruits); // [ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

// reverse
console.log(fruits.reverse()); // [ 'Mango', 'Apple', 'Orange', 'Kiwi' ]
