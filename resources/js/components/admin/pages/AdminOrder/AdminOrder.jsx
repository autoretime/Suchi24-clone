import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import getOrderColumns from './Columns';
import axios from 'axios';

const AdminOrder = () => {

    const [orders, setOrders] = useState([]);


    const getOrders = async () => {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
    }

    useEffect(() => {
        getOrders();
    }, []);

    const removeOrder = async (id) => {
        axios.delete("/api/orders/" + id)
        setOrders(orders.filter((o) => o.id !== id));

    };
     

    return (
        <div className='container'>
            <h2 className='my-3'>Orders</h2>
            <Table dataSource={orders} columns={getOrderColumns(removeOrder)} rowKey='id' />
        </div>
    );
}

export default AdminOrder;