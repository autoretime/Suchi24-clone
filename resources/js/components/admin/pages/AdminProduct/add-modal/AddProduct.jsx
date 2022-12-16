import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import AdditionForm from './AdditionForm';


const AddPr = ({addProduct}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button  className='admin-btn' onClick={showModal}>
                Add Product
            </Button>
            <Modal
                title="Add Product"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <AdditionForm handleCancel={handleCancel} addProduct={addProduct}/>
            </Modal>
        </>
    );
};


export default AddPr;
