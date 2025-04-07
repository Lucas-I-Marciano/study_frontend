import { useBdContext } from "../context/bd"
import { Product } from "./Product"
import { allImages } from "../assets"


export const Home = () => {
    const handleBd = useBdContext()
    console.log(handleBd);

    const allProducts = Object.keys(handleBd.mockDb)


    return (<>
        {allProducts.map(element => {
            return <Product
                currency={handleBd.mockDb[element].currency}
                price={handleBd.mockDb[element].price}
                title={element}
                description={handleBd.mockDb[element].description}
                image={allImages[element]}
                measure={handleBd.mockDb[element].measure} />
        })}
    </>)
}