import React , { useEffect}from 'react';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from 'antd/lib/form/Form';

// showModalAddState, modalAddClose, submitAddHandler
const AddForm = ({  addCategories, handleCancel, editedCategory }) => {
    
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue (editedCategory ?? {})
    }, [editedCategory, form]);

    const submitHandler = async(values) =>{
        const {data} = await axios.post('/api/categories', values, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        if(data.success){
            handleCancel()
            addCategories(data.data)            
        }
    }
    
    const initialValues = {}
    return (
        <div>
        <Form initialValues={initialValues} onFinish={submitHandler} form={form}>
            <Form.Item
                label="Category Name"
                name="name"
                rules={[{ required: true } , { min: 3 }] }
            >
                <Input />
            </Form.Item>           

            <Form.Item >
                <Button htmlType='submit' type='primary'>Save</Button>
            </Form.Item>
        </Form>
    </div>
    );
}

export default AddForm;
