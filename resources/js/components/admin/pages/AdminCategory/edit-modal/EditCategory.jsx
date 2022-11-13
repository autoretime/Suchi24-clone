import { Modal } from 'antd';
import React from 'react';
import AddForm from '../add-modal/AddForm';

const EditCategory = ({ isModalOpen, setIsModalOpen, editedCategory,editCategory}) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Modal
                title="Edit Category"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <AddForm handleCancel={handleCancel} addProduct={null} editedCategory={editedCategory}  editCategory={editCategory}/>
            </Modal>
        </div>
    );
}

export default EditCategory;
