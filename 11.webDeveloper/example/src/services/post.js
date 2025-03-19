import instance from "../providers/client";

export const listPosts = async () => {
  return await instance.get("/posts");
};

export const listPostsUser = async (filter) => {
  return await instance.get(`/posts${filter || ""}`);
};
