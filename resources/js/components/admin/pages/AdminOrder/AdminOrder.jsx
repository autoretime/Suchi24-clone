import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import getOrderColumns from './columns';

const AdminOrder = () => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
    }

    useEffect(() => {
        getOrders();
    }, []);


    return (
        <div className='container'>
            <h2 className='my-3'>Orders</h2>
            <Table dataSource={orders} columns={getOrderColumns()} rowKey='id' />
        </div>
    );
}

export default AdminOrder;