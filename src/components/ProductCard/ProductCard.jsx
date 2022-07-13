import { useCart } from "../../context/index"
import "./ProductCard.css"

function ProductCard({itemDetails})
{
    const { userCart, dispatchUserCart } = useCart()

    const {
        id,
        name,
        brand,
        gender,
        price,
        sizesAvailable,
        imgSrc
    } = itemDetails

    function addProductToCart()
    {
        dispatchUserCart({type: "ADD_PRODUCT_TO_CART",payload: itemDetails})
    }

    return (
        <div className="product-card">
            <img 
                className="img-product"
                src={imgSrc} 
                alt={name}
            >
            </img>
            <div className="product-details">
                <div className="card-product-name">{name}</div>
                <p>Brand: {brand}</p>
                <p>₹{price}</p>
                <span>Sizes: </span>{
                    sizesAvailable.map( (size,index)=>
                        <span key={index} className="sizes-available">{size.toUpperCase()}</span>    
                    )
                }
            </div>
            <button 
                className="btn-add-to-cart"
                onClick={addProductToCart}
            >
                Add to Cart
            </button>
        </div>
    )
}

export { ProductCard }