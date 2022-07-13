import { useEffect, useState } from "react"
import { useCart } from "../../context"
import { useSaveForLater } from "../../context"
import "./HorizontalProductCard.css"

function HorizontalProductCard({productDetails})
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

    function decreaseProductQuantity()
    {
        if(productQuantity!==0)
        {
            dispatchUserCart({type:"UPDATE_PRODUCT_QUANTITY",payload:{id:id,quantity:productQuantity-1}})
        }
    }

    function increaseProductQuantity()
    {
        dispatchUserCart({type:"UPDATE_PRODUCT_QUANTITY",payload:{id:id,quantity:productQuantity+1}})
    }

    function updateProductQuantity(event)
    {
        let newQuantity = Number(event.target.value)
        dispatchUserCart({type:"UPDATE_PRODUCT_QUANTITY",payload:{id:id,quantity:newQuantity}})
    }

    function removeProductFromCart()
    {
        dispatchUserCart({type:"REMOVE_PRODUCT_TO_CART",payload:productDetails})
    }

    function addProductToSaveFromLater()
    {
        dispatchSaveForLater({type:"ADD_PRODUCT_TO_SAVE_LATER",payload:productDetails})
        dispatchUserCart({type:"REMOVE_PRODUCT_TO_CART",payload:productDetails})
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
                    <div 
                        className={productQuantity===0?"disable-decrease-quantity btn-product-quantity-change":"btn-product-quantity-change"}
                        onClick={decreaseProductQuantity}
                    >
                        -
                    </div>
                    <input
                        value={productQuantity}
                        onChange={(e)=>{updateProductQuantity(e)}}
                    ></input>
                    <div 
                        className="btn-product-quantity-change"
                        onClick={increaseProductQuantity}
                    >
                        +
                    </div>
                </div>
                <div 
                    onClick={addProductToSaveFromLater}
                    className="btn-save-for-later"
                >
                        SAVE FOR LATER
                </div>
                <div 
                    onClick={removeProductFromCart}
                    className="btn-remove"
                >
                    REMOVE
                </div>
            </div>
        </div>
    )
}

export { HorizontalProductCard }