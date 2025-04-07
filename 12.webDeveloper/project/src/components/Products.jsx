import { useBdContext } from "../context/bd"
import { Product } from "./Product"
import { allImages } from "../assets"



export const Products = () => {
    const handleBd = useBdContext()
    const allProducts = Object.keys(handleBd.mockDb)

    return (
        <div className="flex flex-wrap">
            {allProducts.map(element => {
                return <Product
                    currency={handleBd.mockDb[element].currency}
                    price={handleBd.mockDb[element].price}
                    title={element}
                    description={handleBd.mockDb[element].description}
                    image={allImages[element]}
                    measure={handleBd.mockDb[element].measure} />
            })}
        </div>
    )
}