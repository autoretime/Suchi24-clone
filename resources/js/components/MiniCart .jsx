import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const MiniCart = () => {
    const {cartItems,  modalShow} = useContext(CartContext);
    return (
        <div>
            <h2>Your Order</h2>
            <a onClick={modalShow} className="">
                    Edit Cart
            </a>
            {cartItems.map((item) => 
                <div key={item.id} className="cart-item ">
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.amount}</div>
                    <div>{item.price * item.amount}</div>
                </div>
            )}
        </div>
    );
}

export default MiniCart;
