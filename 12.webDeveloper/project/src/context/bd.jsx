import { createContext, useContext, useState } from "react"

const BdContext = createContext()

const db = {
    banana: {
        price: 6,
        currency: "BRL",
        measure: "KG",
    },
    apple: {
        price: 3,
        currency: "BRL",
        measure: "KG",
    },
    orange: {
        price: 5.5,
        currency: "BRL",
        measure: "KG",
    },
    avocato: {
        price: 5,
        currency: "BRL",
        measure: "UN",
    },
    Mango: {
        price: 6,
        currency: "BRL",
        measure: "UN",
    },
}

export const BdContextProvider = ({ children }) => {
    const [mockDb, setMockDb] = useState(db)
    return <BdContext.Provider value={{ mockDb, setMockDb }}>{children}</BdContext.Provider>
}

export const useBdContext = () => {
    return useContext(BdContext)

}