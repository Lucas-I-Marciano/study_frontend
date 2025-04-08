import { useNavigate } from "react-router"
import { useBdContext } from "../context/bd"

import { CartProduct } from "./CartProduct"




export const CartTable = () => {
    const { cart, setCart } = useBdContext()
    const navigate = useNavigate()

    const resetCart = {}


    const entries = Object.entries(cart)
    entries.forEach(([key, value]) => {
        resetCart[key] = { ...value, "quantity": 0 }
    })


    const sumTotal = entries.reduce((acc, [_, itsObject]) => {
        return acc + itsObject['quantity'] * itsObject['price']
    }, 0)

    return (<>
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-blue-700 font-serif text-shadow-4  xs">Marciano's Store!</h1>
            <table className="table-auto text-center">
                <thead className="border-b-1 border-gray-900 divide-x-3 divide-dashed">
                    <tr className="text-sm text-blue-900">
                        <th className="p-2">Item</th>
                        <th className="p-2 min-w-15">Price</th>
                        <th className="p-2 min-w-30">Quantity</th>
                        <th className="p-2 min-w-25">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <CartProduct item="banana" />
                    <CartProduct item="mango" />
                    <CartProduct item="avocado" />
                    <CartProduct item="orange" />
                    <CartProduct item="apple" />
                </tbody>
            </table>

            <div className="border-t-1 mt-10 min-w-100 text-end p-5">Total: R${parseFloat(sumTotal).toFixed(2)}</div>
            <div className="flex justify-between min-w-100">
                <button
                    onClick={() => { navigate("/") }}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Back to Shop
                </button>
                <button
                    onClick={() => {
                        alert(`You have to pay R$${parseFloat(sumTotal).toFixed(2)}\nThanks for buying on Marciano's Store! 😁`)
                        setCart(resetCart)
                        navigate("/")
                    }}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Finish
                </button>
            </div>
        </div>
    </>)
}