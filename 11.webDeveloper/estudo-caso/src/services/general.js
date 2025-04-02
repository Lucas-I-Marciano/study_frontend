import client from "../providers/client";

export const getGeneral = async () => {
  const response = await client.get();
  return response;
};
