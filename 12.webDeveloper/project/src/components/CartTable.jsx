import { useBdContext } from "../context/bd"

import { CartProduct } from "./CartProduct"




export const CartTable = () => {
    const { cart } = useBdContext()
    const entries = Object.entries(cart)

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
        </div>
    </>)
}