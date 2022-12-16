import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import getOrderColumns from "./Columns";
import axios from "axios";

const AdminOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    let [filteredData] = useState();

    const getOrders = async () => {
        setLoading(true);
        const response = await axios.get("/api/orders");
        setOrders(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getOrders();
    }, []);

    const removeOrder = async (id) => {
        axios.delete("/api/orders/" + id);
        setOrders(orders.filter((o) => o.id !== id));
    };

    const globalChange = () => {
        filteredData = orders.filter((value) => {
            return (
                value.user_email.toLowerCase().includes(searchText.toLowerCase()) ||
                value.user_phone.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setOrders(filteredData);
    };

    const Change = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === "") {
            getOrders();
        }
    };

    return (
        <div className="container">
            <h2 className="my-3">Orders</h2>
            <div className="items">
                <Input.Search
                    placeholder="Search here ..."
                    style={{ margin: 10, width: 500 }}
                    allowClear
                    value={searchText}
                    onChange={Change}
                    onSearch={globalChange}
                />
            </div>
            <Table
                loading={loading}
                dataSource={
                    filteredData && filteredData.length ? filteredData : orders
                }
                columns={getOrderColumns(removeOrder)}
                rowKey="id"
            />
        </div>
    );
};

export default AdminOrder;
