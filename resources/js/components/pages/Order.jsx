import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import MiniCart from '../MiniCart ';

const Order = () => {

    const { cartItems,clearCart } = useContext(CartContext);
    const navigate = useNavigate()

    const onFinish = (userData) => {
        axios.post('/api/order', {
            userData, cartItems
        })
        .then(({data})=> {   
            clearCart();         
            navigate('/order-thank', { state: {orderId: data.order_id}})
            
        })
      };

    return (
        <div className="container">
            <div className="order">
                <div className="contact">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                       
                        onFinish={onFinish}                        
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="Phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Phone!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="cart">
                    <MiniCart />
                </div>
            </div>
        </div>
    );
}

export default Order;
