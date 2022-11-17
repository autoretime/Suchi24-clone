import { Modal } from 'antd';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

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
                                <div className='d-flex align-items-center'>
                                    <div
                                        className="control dec"
                                        onClick={() =>
                                            decrementProduct(item.id)
                                        }
                                    >
                                        –
                                    </div>
                                    <div>{item.product_amount}</div>
                                    <div
                                        className="control inc"
                                        onClick={() =>
                                            incrementProduct(item.id)
                                        }
                                    >
                                        +
                                    </div>
                                </div>

                                <div>
                                    {item.product_price * item.product_amount}
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

                <Button type="primary" onClick={submitHandler}>
                    Save
                </Button>
            </Modal>
        </div>
    );
}

export default EditProduct;
