import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../contexts/CartContext";
import MiniCart from "../cart/MiniCart ";
import './order.css'

const Order = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const onFinish = (userData) => {
        axios
            .post("/api/order", {
                userData,
                cartItems,
            })
            .then(({ data }) => {
                clearCart();
                navigate("/order-thank", { state: { orderId: data.order_id } });
            });
    };

    return (
        <div className="container">
            <div className="order-position">
                <Row>
                    <Col span={12}>
                        {" "}
                        <Form onFinish={onFinish}>
                            <div className="form-row d-flex justify-content-around ">
                                <div className="form-group col-md-5 ">
                                    <label  className="mb-2 lbl">
                                        Iм'я{" "}
                                        <abbr
                                            className="required"
                                            title="обязательно"
                                            style={{ color: "red" }}
                                        >
                                            *
                                        </abbr>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Iм'я"
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-5">
                                    <label
                                        
                                        className="mb-2 lbl"
                                    >
                                        Телефон{" "}
                                        <abbr
                                            className="required"
                                            title="обязательно"
                                            style={{ color: "red" }}
                                        >
                                            *
                                        </abbr>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="+380 (00) 000-0000"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group px-4 mt-2">
                                <label  className="mb-2 lbl">
                                    Email{" "}
                                    <abbr
                                        className="required"
                                        title="обязательно"
                                        style={{ color: "red" }}
                                    >
                                        *
                                    </abbr>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="suchi24@gmail.com"
                                    required
                                />
                            </div>

                            <div className="form-group px-4 mt-2">
                                <label
                                    
                                    className="mb-2 lbl"
                                >
                                    Спосіб Доставки{" "}
                                    <abbr
                                        className="required"
                                        title="обязательно"
                                        style={{ color: "red" }}
                                    >
                                        *
                                    </abbr>
                                </label>
                                <select
                                    id="exampleFormControlSelect1"
                                    className="form-control"
                                    required
                                    data-placeholder
                                >
                                    <option select="true">Доставка кур'єром</option>
                                    <option>Самовивіз</option>
                                </select>
                            </div>
                            <div className="form-group px-4 mt-2">
                                <label  className="mb-2 lbl">
                                    Адреса{" "}
                                    <abbr
                                        className="required"
                                        title="обязательно"
                                        style={{ color: "red" }}
                                    >
                                        *
                                    </abbr>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="Проспект / Вулиця / Провулок"
                                />
                            </div>
                            <div className="form-row d-flex justify-content-around  mt-2">
                                <div className="form-group col-md-5 ">
                                    <label
                                        
                                        className="mb-2 lbl"
                                    >
                                        Будинок{" "}
                                        <abbr
                                            className="required"
                                            title="обязательно"
                                            style={{ color: "red" }}
                                        >
                                            *
                                        </abbr>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="input-text "
                                        placeholder="Будинок / Блок"
                                    />
                                </div>
                                <div className="form-group col-md-5">
                                    <label
                                        
                                        className="mb-2 lbl"
                                    >
                                        Квартира{" "}
                                    </label>
                                    <input
                                        type="billing_city"
                                        className="form-control"
                                        id="billing_city_field"
                                        placeholder="Номер квартири"
                                    />
                                </div>
                            </div>
                            <div className="form-group px-4 mt-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck"
                                    />
                                    <label
                                        className="form-check-label mb-2 lbl"
                                        
                                    >
                                        Подзвонити мені!
                                    </label>
                                </div>
                            </div>
                            <div className="button-subtotal d-flex justify-content-center  ">
                            <button type="primary" htmlType="submit ">
                                Підтвердити заказ
                            </button>
                        </div>
                        </Form>
                    </Col>
                    <Col span={12} className="second-col">
                        <MiniCart />
                        
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Order;
