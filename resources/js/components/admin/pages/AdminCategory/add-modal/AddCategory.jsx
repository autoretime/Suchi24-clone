import React , {useState}from 'react';
import { Button, Modal } from 'antd';
import AddForm from './AddForm';

const AddCategory = ({addCategories}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

     

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Category
            </Button>
            <Modal
                title="Add Category"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <AddForm handleCancel={handleCancel} addCategories={addCategories}/>
            </Modal>
        </>
    );
}

export default AddCategory;
