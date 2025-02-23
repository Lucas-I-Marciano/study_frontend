import { input } from "console-input";
import fetch from "node-fetch";

export const cepInput = () => {
  return input("Digite um CEP: ");
};

export const getInfoCep = async (cep) => {
  try {
    const response = await (
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    ).json();
    return response;
  } catch (error) {
    console.error(`Erro ao consultar CEP: ${cep}`);
  }
};
