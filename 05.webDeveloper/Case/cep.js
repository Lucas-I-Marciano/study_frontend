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
  } catch (error) {
    console.error(`Erro ao consultar CEP: ${cep}`);
  }
  return response;
};

const saveToJson = (data, fileName) => {
  const parsedJson = JSON.stringify(date);
  fs.writeFile(fileName, parsedJson);
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
