import React , { useEffect}from 'react';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from 'antd/lib/form/Form';

// showModalAddState, modalAddClose, submitAddHandler
const AddForm = ({  addCategories, handleCancel, editedCategory ,editCategory}) => {
    
    const [form] = useForm();
    const initialValues = {}


    useEffect(() => {
        form.setFieldsValue (editedCategory ?? {})
    }, [editedCategory, form]);

    const submitHandler = async(values) =>{
        if(addCategories){
            const {data} = await axios.post('/api/categories', values, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
                handleCancel()
                addCategories(data)
        }

        if(editCategory){
            handleCancel()
            editCategory(editedCategory.id, values)
        }
                    
    }
    
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
