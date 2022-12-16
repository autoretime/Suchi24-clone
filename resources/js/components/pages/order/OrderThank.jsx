import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderThank = () => {

    const {state: {orderId}} = useLocation();

    return (
        <div className="container">
            <div className="order-position">
                <h1 className="d-flex justify-content-center align-items-center text-success">
                    Thanks You!{" "}
                </h1>
                <h2 className="d-flex justify-content-center align-items-center text-success">
                    Your order #{orderId} is being processed
                </h2>
            </div>
        </div>
    );
}

export default OrderThank;
