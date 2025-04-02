import client from "../providers/client"

export const root = async ()=>{
    const response = await client.get("/")
    return response.data
}

export const login = async (body)=>{
    const response = await client.post("/login", body)
    return response.data
}

export const getMe = async (token)=>{
    if (token) {
        client.defaults.headers.common["Authorization"] = token
        const response = await client.get('/me')
        return response.data
    }
    return {}
}