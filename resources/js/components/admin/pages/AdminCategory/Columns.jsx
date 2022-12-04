import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { Avatar, Popconfirm } from 'antd';

const getColumnsCategory = (removeCategory, setEditedCategory, setIsModalOpen) => {
    const columns = [
        {
            title: "id",
            key: "id",
            render: ({ id }) => <div>{id}</div>,
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (category) => (
                <Avatar src={category} shape="square" size={70} />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
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
                            setEditedCategory(category);
                            setIsModalOpen(true);
                        }}
                    />
                    
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => removeCategory(category.id)}
                    >
                        <DeleteOutlined
                            style={{ fontSize: "25px", color: "#f00" }}
                        />
                    </Popconfirm>
                </div>
            ),
        },
    ];
    return columns
}

export default getColumnsCategory