import { Link, useLocation } from "react-router-dom"
import { BsFillCartFill } from "../../assets/icons"
import "./Navbar.css"

function Navbar()
{
    const location = useLocation()

    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img 
                        className="flipkart-logo"
                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                        alt="flipkart"
                    />
                </Link>
            </div>
            <div className="searchbar-container">
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search for products, brands and more"
                />
            </div>
            <button className="btn-login">Login</button>
            {
                location.pathname!=="/cart" && 
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <div className="btn-cart">
                        <BsFillCartFill/>
                        Cart
                    </div>
                </Link>
            }
        </div>
    )
}

export { Navbar }