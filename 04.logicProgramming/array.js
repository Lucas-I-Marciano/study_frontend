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
