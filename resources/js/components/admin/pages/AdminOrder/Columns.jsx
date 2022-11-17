import { EyeOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';

const getOrderColumns = (removeOrder) =>{

    const dateFormat = (str = '') => {
        return moment(str).utc().format("YYYY-MM-DD, HH:mm:ss")
    }
    const columns = [
        {
            title: "Order number",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Total",
            dataIndex: "total_sum",
            key: "total_sum",
        },
        {
            title: "User email",
            dataIndex: "user_email",
            key: "total_sum",
        },
        {
            title: "User Phone",
            dataIndex: "user_phone",
            key: "user_phone",
        },
        {
            title: "Create",
            key: "created_at",
            render: (order) => dateFormat(order.created_at)
        },
        {
            title: "Update",
            key: "created_at",
            render: (order) => dateFormat(order.updated_at)
        },
        {
            title: "Action",
            key: "action",
            render: (order) => (
                <div>
                    <Link to={`/admin/orders/${order.id}`}><EyeOutlined style={{ fontSize: '25px', paddingRight: '10px' }} /></Link>
                    
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => removeOrder(order.id)}
                    >
                        <DeleteOutlined
                            style={{ fontSize: "25px", color: "#f00" }}
                        />
                    </Popconfirm>
                </div>
            )
        },
    ];
    return columns
}

export default getOrderColumns