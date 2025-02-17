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
