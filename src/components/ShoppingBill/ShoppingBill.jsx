import { useCart } from "../../context/index"
import "./ShoppingBill.css"

function ShoppingBill()
{
    const { userCart } = useCart()
    let totalDiscount = 0, totalBill = 0;

    userCart.forEach(product=>{
        let discountOnCurrentProduct = ( (product.price - product.discountedPrice) * product.quantity )
        totalDiscount = totalDiscount + discountOnCurrentProduct
        totalBill = totalBill + ( product.discountedPrice * product.quantity )
    })

    return (
        <div className="shopping-bill">
            <h2>PRICE DETAILS</h2>
            <hr></hr>
            {
                userCart.map(product=>{

                    return (
                        <div key={product.id} className="cart-price-container">
                            <div className="cart-item-name">
                                <p>{product.name}</p>
                            </div>
                            <div className="cart-item-quantity">
                                <p>X {product.quantity}</p>
                            </div>
                            <div className="cart-item-total-price" id="price-sum">
                                <p>&#8377;{product.discountedPrice * product.quantity}</p>
                            </div>
                        </div>
                    )
                })
            }
            
            <hr></hr>

            <div className="cart-discount-container">
                <div className="cart-item-total-discount">
                    <p>Discount</p>
                </div>
                <div className="cart-item-total-discount-amount" id="price-sum">
                    <p>&#8377; {totalDiscount}</p>
                </div>
            </div>

            <div className="cart-delivery-charges-container">
                <div className="cart-item-total-delivery-charges">
                    <p>Delivery Charges</p>
                </div>
                <div className="cart-item-total-delivery-charges-amount" id="price-sum">
                    <p id="delivery-charges">&#8377; 50</p>
                </div>
            </div>

            <hr></hr>

            <div className="cart-total-charges-container">
                <div className="cart-item-total-delivery-charges">
                    <p><b>Total Charges</b></p>
                </div>
                <div className="cart-item-total-delivery-charges-amount" id="price-sum">
                    <p id="total-charges"><b>&#8377; {totalBill}</b></p>
                </div>
            </div>

            <hr></hr>

            <button 
                onClick={()=>{}}
            >
                Place Order
            </button>
        </div>
    )
}

export { ShoppingBill }