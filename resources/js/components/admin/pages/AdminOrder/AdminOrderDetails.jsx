import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';
import moment from 'moment';
import Edit from './edit-info/edit';
import EditProduct from './edit-info/edit-product';
import { EditOutlined } from '@ant-design/icons';

const AdminOrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [orderProducts, setOrderProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        getOrderData();
    }, [id]);


    const dateFormat = (str = '') => {
        return moment(str).utc().format("YYYY-MM-DD, HH:mm:ss")
    }

    const getOrderData = () => {
        axios.get(`/api/order-details/${id}`)
            .then(({ data }) => {
                setOrder(data);
                setOrderProducts(data.order_products)
            })
    }

    const columns = [
        {
            title: "Product Name",
            dataIndex: "product_name",
            key: "product_name",
        },
        {
            title: "Price",
            dataIndex: "product_price",
            key: "product_price",
        },
        {
            title: "Quantity",
            dataIndex: "product_amount",
            key: "product_amount",
        },
        {
            title: "Total",
            key: "total",
            render: (orderProducts) => orderProducts.product_price * orderProducts.product_amount
        },
        {
            title: "Action",
            key: "action",
            render: (category) => (
                <div>
                    <EditOutlined
                        style={{
                            fontSize: "25px",
                            color: "#00D678",
                            paddingRight: "10px",
                        }}
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                    />
                </div>
            ),
        },
        

    ];

    return (
        <div className='container'>
            <h2 className='my-3'>Order №{id}</h2>
            <p><b>Email:</b> {order.user_email}</p>
            <p><b>Phone:</b> {order.user_phone}</p>
            <p><b>Name:</b> {order.user_name}</p>
            <p><b>Adress:</b> {order.user_adress}</p>
            <p><b>Будинок:</b> {order.user_adress_house}</p>
            <p><b>Квартира:</b> {order.user_adress_number}</p>
            <p><b>Created at:</b> {dateFormat(order.created_at)}</p>
            <Edit order={order} setOrder={setOrder} />
            <hr></hr>
            <h4>Order Products:</h4>
            <EditProduct setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} orderProducts={orderProducts} setOrderProducts={setOrderProducts} />
            <Table dataSource={orderProducts} columns={columns} rowKey='id'/>

        </div>
    );
}

export default AdminOrderDetails;