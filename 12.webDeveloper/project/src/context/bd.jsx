import { createContext, useContext, useState } from "react"

const BdContext = createContext()

const db = {
    banana: {
        price: 6,
        currency: "BRL",
        measure: "KG",
        description: "A banana is an elongated, edible fruit – botanically a berry[1] – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa. In some countries, cooking bananas are called plantains, distinguishing them from dessert bananas",
    },
    apple: {
        price: 3,
        currency: "BRL",
        measure: "KG",
        description: "An apple is a round, edible fruit produced by an apple tree (Malus spp.). Fruit trees of the orchard or domestic apple (Malus domestica), the most widely grown in the genus, are cultivated worldwide",
    },
    orange: {
        price: 5.5,
        currency: "BRL",
        measure: "KG",
        description: "The orange, also called sweet orange to distinguish it from the bitter orange (Citrus × aurantium), is the fruit of a tree in the family Rutaceae. Botanically, this is the hybrid Citrus × sinensis, between the pomelo (Citrus maxima) and the mandarin orange (Citrus reticulata)",
    },
    avocado: {
        price: 5,
        currency: "BRL",
        measure: "UN",
        description: "The avocado, alligator pear or avocado pear (Persea americana) is an evergreen tree in the laurel family (Lauraceae). It is native to the Americas and was first domesticated in Mesoamerica more than 5,000 years ago",
    },
    mango: {
        price: 6,
        currency: "BRL",
        measure: "UN",
        description: "Mango is native to India and Southeast Asia, and people have cultivated it for over 4,000 years.Hundreds of types of mango exist, each with its own characteristic taste, shape, size, and color",
    },
}

const handleCart = {}

const entries = Object.entries(db)
entries.forEach(([key, value]) => {
    const { price, measure } = value
    handleCart[key] = { price, measure, quantity: 0 }
})


export const BdContextProvider = ({ children }) => {
    const [mockDb, setMockDb] = useState(db)
    const [cart, setCart] = useState(handleCart)
    return <BdContext.Provider value={{ mockDb, setMockDb, cart, setCart }}>{children}</BdContext.Provider>
}

export const useBdContext = () => {
    return useContext(BdContext)

}