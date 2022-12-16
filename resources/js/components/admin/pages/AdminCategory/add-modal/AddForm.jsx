import React , { useEffect, useState}from 'react';
import { Button, Form, Input, Upload } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from 'antd/lib/form/Form';
import { PlusOutlined } from '@ant-design/icons';
import "../style.css";


// showModalAddState, modalAddClose, submitAddHandler
const AddForm = ({  addCategories, handleCancel, editedCategory ,editCategory}) => {
    
    const [form] = useForm();
    const [fileList, setFileList] = useState([]);

    const initialValues = {}

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


    useEffect(() => {
        if(editedCategory){
            form.setFieldsValue (editedCategory ?? {})
            setFileList([{url: editedCategory.image }])
        }
       
    }, [editedCategory, form]);

    const submitHandler = async(values) =>{
        if(addCategories){
            const {data} = await axios.post('/api/categories', values, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                
            });
                addCategories(data.data)
        }

        if(editCategory){
            editCategory(editedCategory.id, values)
        }
        handleCancel()
                    
    }
    
    return (
        <div>
            <Form
                initialValues={initialValues}
                onFinish={submitHandler}
                form={form}
            >
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true }, { min: 3 }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Image" name="image">
                    <Upload
                        beforeUpload={() => false}
                        onChange={({ fileList }) => setFileList(fileList)}
                        listType="picture-card"
                        onPreview={onPreview}
                        maxCount={1}
                        fileList={fileList}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className='admin-btns'>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddForm;
