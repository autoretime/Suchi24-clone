import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import moment from 'moment';

const Edit= ({ order, setOrder }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const submitHandler = async (values) => {
        const response = await axios.put('/api/orders/' + order.id, values);
        setOrder({
            ...order,
            'user_email': values.user_email,
            "user_phone": values.user_phone,
            "updated_at": moment()
        })
        handleCancel();
    }

    return (
        <>
            <Button className='admin-btns' onClick={showModal}>
                Edit order info
            </Button>
            <Modal title="Edit order info"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >

                <Form
                    initialValues={order}
                    onFinish={submitHandler}

                >
                    <Form.Item
                        label="Email"
                        name="user_email"
                        rules={[
                            {
                                required: true
                            },
                            {
                                type: 'email',
                                message: 'Incorrect emeil'
                            }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="user_phone"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="user_name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Adress"
                        name="user_adress"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Будинок"
                        name="user_adress_house"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Квартира"
                        name="user_adress_number"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType="submit"  className='admin-btns'>Save</Button>
                    </Form.Item>

                </Form>

            </Modal>
        </>
    );
}

export default Edit;