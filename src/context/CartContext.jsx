import { useReducer, createContext, useContext } from "react"

const CartContext = createContext()

const updateCartFunc = (state,action) => {
    switch(action.type)
    {
        case "ADD_PRODUCT_TO_CART" : 
            {
                const index = state.findIndex((productInCart) => productInCart.id === action.payload.id)
     
                return index!==-1 
                ? [...state.slice(0,index),
                    {...state[index], quantity: state[index].quantity + 1,},
                    ...state.slice(index+1,state.length)]

                : [...state, { ...action.payload, quantity: 1 }]
            }
        case "REMOVE_PRODUCT_TO_CART" : 
            {
                let newCart = state.filter(product=>product.id!==action.payload.id)
                return newCart
            }
        case "UPDATE_PRODUCT_QUANTITY" :
            {
                const index = state.findIndex((productInCart) => productInCart.id === action.payload.id)
     
                return index!==-1 
                ? [...state.slice(0,index),
                    {...state[index], quantity: action.payload.quantity,},
                    ...state.slice(index+1,state.length)]

                : [...state, { ...action.payload, quantity: 1 }]
            }
        default : return [...state] 
    }
}

const CartContextProvider = ({children}) => {
    const [userCart, dispatchUserCart] = useReducer(updateCartFunc,[])

    return (
        <CartContext.Provider value={{userCart, dispatchUserCart}}>
            {children}
        </CartContext.Provider>
    )
}

let useCart = () => useContext(CartContext)

export { useCart, CartContextProvider }