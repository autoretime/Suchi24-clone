import { useEffect, useReducer, useState } from "react";
import CartContext from "../contexts/CartContext";
import CartReducer from "../reducers/CartReducer";


const CartProvider = ({children}) => {    
    const initialValues = {cart: JSON.parse(localStorage.getItem('cart') || [])};
    const [state, dispatch] = useReducer(CartReducer, initialValues)


    const [showModal, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state])

    const value = {
        cartItems: state.cart,

        addCartItem: (product) => {
            dispatch({type: "addProduct", product})
        },
        removeCartItem: (id) => {
            dispatch({type: "removeProduct", id})
        },
        clearCart: () => {
            dispatch({type: "clearCart"})
        },
        incrementProduct: (id) => {
            dispatch({ type: "incrementProduct", id });
        },
        decrementProduct: (id) => {
            dispatch({ type: "decrementProduct", id });
        },
        modalClose,
        modalShow,
        showModal,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;
