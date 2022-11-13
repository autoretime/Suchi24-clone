import { EyeOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

const getOrderColumns = () =>{
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
            title: "Create date",
            dataIndex: "created_at",
            key: "created_at",
        },
        {
            title: "Action",
            key: "action",
            render: (order) => (
                <div>
                    <Link to={`/admin/orders/${order.id}`}><EyeOutlined style={{ fontSize: '45px', paddingRight: '10px' }} /></Link>
                    <EditOutlined
                        style={{
                            fontSize: "25px",
                            color: "#00D678",
                            paddingRight: "10px",
                        }}
                        onClick={() => {
                           console.log();
                        }}
                    />
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => console.log()}
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