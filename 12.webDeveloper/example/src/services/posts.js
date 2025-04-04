import instance from "../providers/fakeApi";

export const createPost = async (body) => {
    try {
        const response = await instance.post("/posts", body)
        return response
    } catch (error) {

    }
}