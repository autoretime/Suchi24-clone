import React , {useState}from 'react';
import { Button, Modal } from 'antd';
import AddForm from './AddForm';
import "../style.css"


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
            <Button className='admin-btns' onClick={showModal}>
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
