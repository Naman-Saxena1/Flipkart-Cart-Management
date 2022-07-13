import { Link } from "react-router-dom"
import {
    HorizontalProductCard,
    ProductSavedForLaterCard,
    ShoppingBill
} from "../../components/index"
import {
    useCart, useSaveForLater
} from "../../context/index"
import { notify } from "../../App"
import "./Cart.css"

function Cart()
{
    const { userCart } = useCart()
    const { saveForLater } = useSaveForLater()
    
    return (
        <div className="cartpage-container">
            <h2 className="cart-heading">CART ({userCart.length})</h2>
            {
                userCart.length===0
                ? (
                    <div className="empty-cart-msg">
                        <p>Cart is Empty</p>
                        <Link to="/">
                        <button>Shop products</button>
                        </Link>
                    </div>
                ): (
                    <div className="cart-grid">
                            <div className="cart-items-grid">
                                {
                                    userCart.map( (productDetails, index)=>    
                                        <HorizontalProductCard key={index} productDetails={productDetails}/>
                                    )
                                }
                            </div>
                        <ShoppingBill/>
                    </div>
                )
            }
            <div className="save-for-later-container">
                { saveForLater.length>0 && <h2>SAVE FOR LATER</h2> }
                {
                    saveForLater.length>0 && (
                        <div className="cart-grid">
                            <div className="cart-items-grid">
                                {
                                    saveForLater.map( (productDetails, index)=>    
                                        <ProductSavedForLaterCard key={index} productDetails={productDetails}/>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { Cart }