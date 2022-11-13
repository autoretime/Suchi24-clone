import React, {useState, useEffect} from 'react';
import { Button, Form, Input, Select, Upload  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";
import axios from 'axios';
import { useForm } from 'antd/lib/form/Form';


const AdditionForm = ({handleCancel, addProduct, editedProduct, editProduct}) => {

    const [categories, setCategories] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [form] = useForm();

    useEffect(() => {
        getCategories()
    }, []);

    useEffect(() => {
        form.setFieldsValue (editedProduct ?? {})
    }, [editedProduct, form]);

    const getCategories = async() =>{
        const {data} = await axios.get('/api/categories');
        const items = data.map(item => {return {value: item.id, label: item.name }})
        setCategories(items)
    }

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    const submitHandler = async(values) =>{
        if(addProduct){
            const {data} = await axios.post('/api/products', values, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if(data.success){
                handleCancel()
                addProduct(data.data)            
            }
        }        

        if(editProduct){
            handleCancel()
            editProduct(editedProduct.id, values)
        }
    }
    
    const initialValues = {}

    return (
        <div>
            <Form initialValues={initialValues} onFinish={submitHandler} form={form}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true }]}
                >
                    <TextArea />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category_id"
                    rules={[{ required: true }]}
                >
                    <Select options={categories} />
                </Form.Item>

                <Form.Item label="Image" name="image">
                    <Upload
                        beforeUpload={() => false}
                        onChange={({fileList}) => setFileList(fileList)}
                        listType="picture-card"
                        maxCount={1}
                        onPreview={onPreview}
                        fileList={fileList}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item >
                    <Button htmlType='submit' type='primary'>Save</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdditionForm;
