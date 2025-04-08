import { useNavigate } from "react-router"

export const EmptyCartElement = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-blue-700 font-serif text-shadow-4  xs">Marciano's Store!</h1>
            <h2 className="text-2xl p-10  text-blue-900 font-serif text-shadow-4">Empty Cart!</h2>
            <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => {
                    navigate('/')
                }}>
                Back to Shop!
            </button>
        </div>
    )
}