/*
Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo: 
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto
*/

const idade = 18;

if (idade < 5) {
  console.log("Categoria não definida");
} else if (idade >= 5 && idade <= 7) {
  console.log("Infantil A");
} else if (idade <= 10) {
  console.log("Infantil B");
} else if (idade <= 13) {
  console.log("Juvenil A");
} else if (idade <= 17) {
  console.log("Juvenil B");
} else if (idade > 17) {
  console.log("Adulto");
} else {
}
