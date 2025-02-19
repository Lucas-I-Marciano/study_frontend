import fs from "fs";

export const saveToJson = (data, fileName) => {
  const parsedJsonCorrect = JSON.stringify(data);
  fs.writeFile(fileName, parsedJsonCorrect, (err) => err && console.error(err));
};
