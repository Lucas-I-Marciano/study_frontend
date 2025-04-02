import instance from "../providers/client";

export const listUsers = async () => {
  return await instance.get("users");
};

export const listUser = async (id) => {
  return await instance.get(`users/${id}`);
};
