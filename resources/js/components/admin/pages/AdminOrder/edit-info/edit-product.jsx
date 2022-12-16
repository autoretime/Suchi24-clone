import { Modal } from 'antd';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './style.css'

const EditProduct = ({isModalOpen, orderProducts, setOrderProducts, setIsModalOpen}) => {

    const [editedProducts, setEditedProducts] = useState([]);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setEditedProducts(orderProducts)
    }, [orderProducts]);


    const submitHandler = async () => {
        const response = await axios.post('/api/order-products-update', { editedProducts });
        setOrderProducts(editedProducts.filter(product => product.product_amount !== 0 ? product : ''))
        handleCancel();
    }

    const decrementProduct = (id) => {
        setEditedProducts(editedProducts.map(product => {
            if (product.id === id && product.product_amount !== 1) {
                return { ...product, 'product_amount': product.product_amount -= 1 }
            }
            return product
        }));
    }

    const incrementProduct = (id) => {
        setEditedProducts(editedProducts.map(product => { 
            if (product.id === id) {
                return { ...product, 'product_amount': product.product_amount += 1 }
            }
            return product
        }));
    }

    const removeProduct = (id) => {
        setEditedProducts(editedProducts.map(product => {
            if (product.id === id) {
                return { ...product, 'product_amount': product.product_amount = 0 }
            }
            return product
        }));
    }


    return (
        <div>
            <Modal
                title="Edit order info"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    {editedProducts?.map((item) =>
                        item.product_amount !== 0 ? (
                            <div key={item.id} className="cart-items ">
                                <div>{item.product_name}</div>
                                <div className='d-flex align-items-center '>
                                    <div
                                        className="controlers dec"
                                        onClick={() =>
                                            decrementProduct(item.id)
                                        }
                                    >
                                        –
                                    </div>
                                    <div className='px-2'>{item.product_amount}</div>
                                    <div
                                        className="controlers inc"
                                        onClick={() =>
                                            incrementProduct(item.id)
                                        }
                                    >
                                        +
                                    </div>
                                </div>

                                <div>
                                    {item.product_price * item.product_amount}₴
                                </div>
                                <div>
                                    {" "}
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => removeProduct(item.id)}
                                    >
                                        &times;
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    )}
                </div>

                <button className='admin-btns' onClick={submitHandler}>
                    Save
                </button>
            </Modal>
        </div>
    );
}

export default EditProduct;
