import client from "../providers/client"

export const root = async ()=>{
    const response = await client.get("/")
    return response.data
}