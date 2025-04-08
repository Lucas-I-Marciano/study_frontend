import { Products } from "./Products"


export const Home = () => {
    return (<div className="flex flex-col items-center">
        <h1 className="text-3xl text-blue-700 font-serif text-shadow-4  xs">Marciano's Store!</h1>
        <Products />
    </div>)
}