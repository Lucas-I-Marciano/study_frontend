import { cepInput, getInfoCep } from "./cepHelpers.js";
import { saveToJson } from "./fileHelpers.js";

const main = async () => {
  const cep = cepInput();
  const { logradouro, bairro, localidade, uf } = await getInfoCep(cep);

  const data = {
    logradouro,
    bairro,
    localidade,
    uf,
  };
  saveToJson(data, "./05.webDeveloper/Case/localidade.json");
};

main();
