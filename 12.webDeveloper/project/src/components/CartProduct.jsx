import { allImages } from "../assets"
import { useBdContext } from "../context/bd"
import { useNavigate } from "react-router";

export const CartProduct = ({ item }) => {
    const { cart, setCart } = useBdContext()

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

    const RowProduct = () => {
        return (
            <>
                <tr>

                    <td className="flex items-center p-2"><img className="max-w-20 pr-2" src={allImages[item]} /> <span>{item}</span></td>
                    <td className="p-2">{parseFloat(cart[item]['price']).toFixed(2)}</td>
                    <td className="p-2">
                        <button
                            onClick={() => { removeItem(item) }}
                            className="bg-red-100 px-3.5 rounded-md text-lg mr-1">
                            -
                        </button>
                        <span className="min-w-100">{cart[item]['quantity']}</span>
                        <button
                            onClick={() => { addItem(item) }}
                            className="bg-green-100 px-3 rounded-md text-lg ml-1">
                            +
                        </button>
                    </td>
                    <td className="p-2">{parseFloat(cart[item]['quantity'] * cart[item]['price']).toFixed(2)}</td>
                </tr>
            </>
        )
    }

    return (
        <>
            {cart[item]['quantity'] > 0 ? <RowProduct /> : <></>}
        </>
    )
}