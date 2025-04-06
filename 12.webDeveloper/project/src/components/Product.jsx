export const Product = ({ currency, price, title, description, image }) => {
    return (
        <>
            <div>
                <img src={image} />
            </div>
            <div>
                <p>{title}</p>
                <p>{description}</p>

            </div>
            <div>
                <span>{currency} {price}</span>
                <button>Add to Cart</button>
            </div>
        </>
    )
}