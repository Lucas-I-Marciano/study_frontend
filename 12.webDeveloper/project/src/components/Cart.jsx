import { useBdContext } from "../context/bd"
import { CartTable } from "./CartTable"
import { EmptyCartElement } from "./EmptyCartElement"


export const Cart = () => {
    const { cart } = useBdContext()

    const entries = Object.entries(cart)
    const sumQuantity = entries.reduce((acc, [_, itsObject]) => {
        return acc + itsObject['quantity']
    }, 0)

    return (<>
        {sumQuantity == 0 ? <EmptyCartElement /> : <CartTable />}

    </>)
}