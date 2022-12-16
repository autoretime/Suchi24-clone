import React, { useContext } from "react";
import CartContext from "../../../contexts/CartContext";

const MiniCart = () => {
    const { cartItems, modalShow } = useContext(CartContext);
    return (
        <div>
            <h2 style={{ paddingBottom: "25px" }}>Ваш Заказ</h2>
            
            <a onClick={modalShow} className="Back-to-shop d-flex">
               
                &lt;&nbsp;Повернутися до покупок
            </a>
            <div className="d-flex justify-content-around mb-2 align-items-center">
                <div style={{ paddingLeft: "20px", fontWeight: "bold" }}>
                    Товар
                </div>
                <div style={{ paddingLeft: "55px", fontWeight: "bold" }}>
                    Назва
                </div>
                <div style={{ paddingLeft: "10px", fontWeight: "bold" }}>
                    Кількіть
                </div>
                <div style={{ fontWeight: "bold" }}>Ціна</div>
            </div>
            {cartItems.map((item) => (
                <>
                    <div
                        key={item.id}
                        className="cart-item d-flex justify-content-around "
                    >
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div>{item.name}</div>
                        <div>{item.amount}</div>
                        <div>{item.price * item.amount}₴</div>
                    </div>

                    <div
                        className="d-flex subtotal "
                        style={{ fontWeight: "bold" }}
                    >
                        <div>
                            Проміжний підсумок: {item.price * item.amount} ₴
                        </div>
                        <div>Разом: {item.price * item.amount} ₴</div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default MiniCart;
