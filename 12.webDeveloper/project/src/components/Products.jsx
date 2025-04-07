import { useBdContext } from "../context/bd"
import { Product } from "./Product"
import { allImages } from "../assets"
import { useNavigate } from "react-router";



export const Products = () => {
    const { mockDb, cart, total, setTotal } = useBdContext()
    const allProducts = Object.keys(mockDb)

    const closeCart = (cartObject) => {
        const entries = Object.entries(cartObject)
        const finalPrice = entries.reduce((acc, [_, itsObject]) => { return acc + itsObject.price * itsObject.quantity }, 0)
        setTotal(finalPrice)
    }

    let navigate = useNavigate();

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-between">
                {allProducts.map(element => {
                    return <Product
                        currency={mockDb[element].currency}
                        price={mockDb[element].price}
                        title={element}
                        description={mockDb[element].description}
                        image={allImages[element]}
                        measure={mockDb[element].measure} />
                })}
            </div>
            <button
                onClick={() => {
                    closeCart(cart)
                    navigate('/cart')
                }}
                className="w-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go to cart</button>
        </div>
    )
}