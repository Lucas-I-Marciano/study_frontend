import { input } from "console-input";
import fetch from "node-fetch";
import fs from "fs";

const cepInput = () => {
  return input("Digite um CEP: ");
};

const getInfoCep = async (cep) => {
  try {
    const response = await (
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    ).json();
    return response;
  } catch (error) {
    console.error(`Erro ao consultar CEP: ${cep}`);
  }
};

const saveToJson = (data, fileName) => {
  const parsedJsonCorrect = JSON.stringify(data);
  fs.writeFile(fileName, parsedJsonCorrect, (err) => err && console.error(err));
};

const main = async () => {
  const cep = cepInput();
  const { logradouro, bairro, localidade, uf } = await getInfoCep(cep);

  const data = {
    logradouro,
    bairro,
    localidade,
    uf,
  };
  saveToJson(data, "localidade.json");
};

main();
