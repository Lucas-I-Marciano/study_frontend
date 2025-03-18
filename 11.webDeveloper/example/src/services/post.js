import instance from "../providers/client";

export const listPosts = async () => {
  return await instance.get("/posts");
};
