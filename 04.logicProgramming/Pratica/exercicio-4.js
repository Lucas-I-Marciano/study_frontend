// 4 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas, e imprime no console a média aritmética dessas notas.
// OBS: Para melhorar a resolução desse problema, monte um programa que retorna a média aritmética independente do tamanho do array.
// Exemplo Entrada: [6, 8, 7]

const myArray = [10, 8, 6];

const mean = (array) => {
  const sum = array.reduce((acc, value) => {
    return (acc += value);
  });
  return sum / array.length;
};

console.log(mean(myArray));
