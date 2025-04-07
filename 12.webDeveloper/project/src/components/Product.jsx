import { useBdContext } from "../context/bd"


export const Product = ({ currency, price, title, description, image, measure }) => {
    const { cart, setCart } = useBdContext()
    const addItem = (item) => {
        const valueBefore = cart[item]['quantity']
        const addedValue = valueBefore + 1
        setCart({ ...cart, [item]: { ...cart[item], quantity: addedValue } });

    }

    const ButtonAddCartDefault = () => {

        return <button onClick={() => { addItem(title) }} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center">
            Add to Cart
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>
    }

    const ButtonAddMore = () => {
        return <div className="border-red-700 border-solid rounded-sm"><button className="bg-red-100 px-3.5 rounded-md text-lg mr-1">-</button> <span>1</span> <button className="bg-green-100 px-3 rounded-md text-lg ml-1">+</button></div>

    }

    return (
        <>
            <div className="w-70 flex flex-col items-center p-5 shadow-2xl m-4 rounded-2xl justify-between">
                <div>
                    <img className="w-35 pb-1" src={image} />
                </div>
                <div>
                    <p className="text-2xl pb-1">{title}</p>
                    <p className="text-xs pb-4 text-justify">{description}</p>

                </div>
                <div className="flex justify-between w-full">
                    <span className="font-bold text-lg text-gray-700">{currency} {price} /{measure}</span>
                    {cart[title]["quantity"] == 0 ? <ButtonAddCartDefault /> : <ButtonAddMore />}

                </div>
            </div>
        </>
    )
}