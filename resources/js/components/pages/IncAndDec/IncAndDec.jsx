import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../../contexts/CartContext";

const IncAndDec = () => {
    const { cartItems, decrementProduct, incrementProduct } =
        useContext(CartContext);
    console.log(cartItems);
    const incAndDec = () => cartItems.length === 0 ? true : false
    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id} className="d-flex px-2 justify-content-between ">
                     <div
                        className="controls dec"
                        onClick={() => decrementProduct(item.id)}
                    >
                        –
                    </div>
                    <div className="amounts">{item.amount}</div>
                    <div
                        className="controls inc"
                        onClick={() => incrementProduct(item.id)}
                    >
                        +
                    </div>                     
                </div>
            ))}
        </div>
    );
};

export default IncAndDec;
