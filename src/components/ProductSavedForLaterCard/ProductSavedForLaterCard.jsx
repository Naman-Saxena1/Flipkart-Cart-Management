import { useEffect, useState } from "react"
import { useCart } from "../../context"
import { useSaveForLater } from "../../context"
import "./ProductSavedForLaterCard.css"

function ProductSavedForLaterCard({productDetails})
{
    const {
        id,
        name,
        brand,
        gender,
        price,
        sizesAvailable,
        imgSrc,
        quantity
    } = productDetails
    const { userCart, dispatchUserCart } = useCart()
    const { saveForLater, dispatchSaveForLater} = useSaveForLater()

    const [ productQuantity, setProductQuantity ] = useState(quantity)

    useEffect(()=>{
        setProductQuantity(quantity)
    },[quantity])

    function moveProductToCart()
    {
        dispatchUserCart({type: "ADD_PRODUCT_TO_CART",payload: productDetails})
        dispatchSaveForLater({type: "REMOVE_PRODUCT_TO_SAVE_LATER",payload: productDetails})
    }

    return (
        <div className="card-basic-horizontal">
            <div className="horizontal-product-card-details">
                <img className="horizontal-product-card-img" src={imgSrc} alt={name}></img>
                <div className="horizontal-product-card-description">
                    <div>{name}</div>
                    <div>{brand}</div>
                    <div>₹{price}</div>
                </div>
            </div>
            <div className="horizontal-product-card-options">
                <div className="product-quantity-update-container">
                    
                </div>
                <div 
                    onClick={moveProductToCart}
                    className="btn-save-for-later"
                >
                        MOVE TO CART
                </div>
            </div>
        </div>
    )
}

export { ProductSavedForLaterCard }