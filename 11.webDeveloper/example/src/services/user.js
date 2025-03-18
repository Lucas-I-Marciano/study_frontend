import instance from "../providers/client";

export const listUsers = async () => {
  return await instance.get("users");
};
