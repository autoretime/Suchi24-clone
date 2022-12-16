import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../../../contexts/CartContext';

const Cart = () => {
    const {cartItems, removeCartItem, decrementProduct, incrementProduct} = useContext(CartContext);
    console.log(cartItems);
    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item ">
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div>{item.name}</div>

                    <div
                        className="controls dec"
                        onClick={() => decrementProduct(item.id)}
                    >
                        –
                    </div>
                    <div className="amount">{item.amount}</div>
                    <div
                        className="controls inc"
                        onClick={() => incrementProduct(item.id)}
                    >
                        +
                    </div>

                    <div>{item.price * item.amount} ₴</div>
                    <div>
                        {" "}
                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeCartItem(item.id)}
                        >
                           &times;
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;
