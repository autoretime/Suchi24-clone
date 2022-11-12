import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import Cart from "./pages/cart/Cart";
import AuthUserContext from "../contexts/AuthUserContext";
import Logout from "./pages/Logout";


const Header = () => {

    const {cartItems , modalClose,  modalShow, showModal} = useContext(CartContext);
    const [authUser, setAuthUser] =useContext(AuthUserContext);
    

    const totalSum = () => 
        cartItems.reduce((sum, item) => sum + item.price * item.amount, 0)

    const isCartEmpty = () => cartItems.length === 0 ? true : false;

    const cartFooter = (isCartEmpty) => {
        if (isCartEmpty) {
            return (<p>Cart empty. You can go to <Link to="/" onClick={modalClose}>
                catalog
            </Link> and select products to buy</p>)
        }
        else {
            return (<>
                <p>Total: {totalSum()}</p>
                <Link to="/order" className='btn btn-primary' onClick={modalClose}>
                    Place Order
                </Link>
            </>)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        React
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            {authUser?.role === "admin" ? (
                                <>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/admin/categories"
                                        >
                                            Categories
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/admin/products"
                                        >
                                            Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/admin/orders"
                                        >
                                            Orders
                                        </a>
                                    </li>
                                </>
                            ) : (
                                ""
                            )}
                        </ul>
                        <ul className="navbar-nav me-3 mb-2 mb-lg-0 justify-content-end col">
                            <Logout />
                        </ul>
                    </div>

                    <Button
                        style={{
                            width: "3rem",
                            height: "3rem",
                            position: "relative",
                        }}
                        variant="outline-primary"
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
            </nav>
            {/* 
            <Button variant="primary" onClick={handleShow}>
                Cart <small>{cartItems.length}</small>
            </Button> */}

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
