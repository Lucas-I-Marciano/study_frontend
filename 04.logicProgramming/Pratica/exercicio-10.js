// 10 - Escreva um programa para encontrar os elementos comuns entre dois arrays

const array1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];
const array2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255];

const getCommomValues = (firstArray, secondArray) => {
  const commomValues = [];
  firstArray.forEach((valueOne) => {
    secondArray.forEach((valueSecond) => {
      if (valueSecond === valueOne) {
        commomValues.push(valueOne);
      }
    });
  });
  return commomValues;
};

console.log(getCommomValues(array1, array2));
