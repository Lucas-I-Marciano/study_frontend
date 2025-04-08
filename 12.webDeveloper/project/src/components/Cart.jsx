import { useBdContext } from "../context/bd"
import { allImages } from "../assets"



export const Cart = () => {
    const { cart, setCart } = useBdContext()
    const entries = Object.entries(cart)

    const addItem = (item) => {
        const valueBefore = cart[item]['quantity']
        const addedValue = valueBefore + 1
        setCart({ ...cart, [item]: { ...cart[item], quantity: addedValue } });

    }

    const removeItem = (item) => {
        const valueBefore = cart[item]['quantity']
        const addedValue = valueBefore - 1
        setCart({ ...cart, [item]: { ...cart[item], quantity: addedValue } });

    }

    return (<>
        <div>
            <table className="table-auto text-center">
                <thead className="border-b-1 border-gray-900 divide-x-3 divide-dashed">
                    <tr className="text-sm text-blue-900">
                        <th className="p-2">Item</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="flex items-center p-2"><img className="max-w-20 pr-2" src={allImages["banana"]} /> <span>Banana</span></td>
                        <td className="p-2">3</td>
                        <td className="p-2">
                            <button
                                onClick={() => { removeItem("banana") }}
                                className="bg-red-100 px-3.5 rounded-md text-lg mr-1">
                                -
                            </button>
                            <span>{cart["banana"]['quantity']}</span>
                            <button
                                onClick={() => { addItem("banana") }}
                                className="bg-green-100 px-3 rounded-md text-lg ml-1">
                                +
                            </button>
                        </td>
                        <td className="p-2">{cart["banana"]['quantity'] * cart["banana"]['price']}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>)
}