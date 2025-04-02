import client from "../providers/client";

export const authService = async (data) => {
  try {
    const response = await client.post("/login", data);
    return response;
  } catch (error) {
    return { message: error.message };
  }
};
