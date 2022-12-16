import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import Cart from "../pages/cart/Cart";
import Logout from "../pages/Authorization/Logout";
import Search from "../Search";
import "./header.css";
import Sidebar from "./Sidebar";
import MainSidebar from "./MainSidebar";

const Header = () => {
    const { cartItems, modalClose, modalShow, showModal } =
        useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const totalSum = () =>
        cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);

    const showModalSearch = () => {
        setIsModalOpen(true);
    };

    const isCartEmpty = () => (cartItems.length === 0 ? true : false);

    const cartFooter = (isCartEmpty) => {
        if (isCartEmpty) {
            return (
                <p className="empty ">
                    Корзина порожня. <br />
                    Додайте щось щоб зробити мене щасливим :)
                    <br />
                    <br />
                    <Link to="/" onClick={modalClose}>
                        Продовжити покупки
                    </Link>{" "}
                </p>
            );
        } else {
            return (
                <>
                    <p>Total: {totalSum()} ₴</p>
                    <Link
                        to="/order"
                        className="btn btn-order"
                        onClick={modalClose}
                    >
                        Place Order
                    </Link>
                </>
            );
        }
    };

    return (
        <>
            <div className="header-links d-f j-c-s-b p-6">
                <div className="logo-block d-f">
                    <a className="d-f logo" href="/">
                        <img src="https://24rolls.com.ua/wp-content/uploads/2022/10/logo-1-300x139.png.webp" />
                    </a>
                    <div className=" d-f f-d-c call a-i-c j-c-c">
                        <p> Работаем с 9 до 21 </p>
                        <span>
                            <a href="tel:+380985604424">(098)560-44-24</a>
                        </span>
                    </div>
                </div>

                <MainSidebar />

                <div className="social-links-block d-f a-i-c ">
                    <div className="px-2">
                    <button
                        type="button"
                        className=" admin-btn"
                        onClick={showModalSearch}
                    >
                        <i className="fas fa-search"></i>
                    </button>
                    <Search
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                    </div>
                    

                    <ul className="navbar-nav me-3 mb-2 mb-lg-0  col logout d-flex" >
                        <Logout />
                    </ul>
                    <Button
                        style={{
                            width: "3rem",
                            height: "3rem",
                            position: "relative",
                        }}
                        variant="outline-success"
                        className="rounded-circle"
                        onClick={modalShow}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="currentColor"
                        >
                            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        {!isCartEmpty() ? (
                            <div
                                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{
                                    color: "white",
                                    width: "1.5rem",
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    transform: "translate(25%, 25%)",
                                }}
                            >
                                {cartItems.length}
                            </div>
                        ) : (
                            ""
                        )}
                    </Button>
                </div>
            </div>

            <Sidebar />

            <Modal show={showModal} onHide={modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                {!isCartEmpty() ? (
                    <Modal.Body>
                        <Cart />
                    </Modal.Body>
                ) : (
                    ""
                )}

                <Modal.Footer>{cartFooter(isCartEmpty())}</Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;
