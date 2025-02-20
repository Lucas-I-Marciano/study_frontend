// import fs from "fs";

// fs.readFile("./05.webDeveloper/Project/lista.csv", "utf-8", (err, data) => {
//   console.log(data.readLines());
// });

import { open } from "node:fs/promises";

const readingFileAddingLinesArray = async (path) => {
  const toReturn = [];
  const file = await open(path);

  for await (const line of file.readLines()) {
    toReturn.push(line);
  }
  return toReturn;
};

const getHeadersCsv = (allLines) => {
  const toReturn = allLines[0].split(",").filter((element) => {
    return element !== "";
  });
  return toReturn;
};

const getArrayOfObjects = (linesWithoutHeader, headers) => {
  const toReturn = [];
  linesWithoutHeader.forEach((value, index) => {
    const aux = {};
    value.forEach((value2, index2) => {
      if (headers[index2] === "preco") {
        aux[headers[index2]] = `R$${value2}`.replace(".", ",");
      } else {
        aux[headers[index2]] = value2;
      }
    });
    toReturn.push(aux);
  });
  return toReturn;
};

const lines = await readingFileAddingLinesArray(
  "./05.webDeveloper/Project/lista.csv"
);

const headers = getHeadersCsv(lines);
const formatedLines = lines.slice(1).map((element) => element.split(","));

const myArray = getArrayOfObjects(formatedLines, headers);
console.log(myArray);
