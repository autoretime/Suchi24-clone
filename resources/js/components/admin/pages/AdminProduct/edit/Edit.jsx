import { Modal } from 'antd';
import React from 'react';
import AdditionForm from '../add-modal/AdditionForm';


const Edit = ({ isModalOpen, setIsModalOpen, editedProduct, editProduct}) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Modal
                title="Edit Product"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <AdditionForm
                    handleCancel={handleCancel}
                    addProduct={null}
                    editedProduct={editedProduct}
                    editProduct={editProduct}
                />
            </Modal>
        </div>
    );
}

export default Edit;
