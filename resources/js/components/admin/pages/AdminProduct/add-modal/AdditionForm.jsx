import React, {useState, useEffect} from 'react';
import { Button, Form, Input, Select, Upload  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from "antd/lib/input/TextArea";
import axios from 'axios';
import { useForm } from 'antd/lib/form/Form';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragableUploadListItem from './DragableUploadListItem';
import update from 'immutability-helper';
import { useCallback } from 'react';

const AdditionForm = ({handleCancel, addProduct, editedProduct, editProduct}) => {

    const [categories, setCategories] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [fileListGallery, setFileListGallery] = useState([]);
    const [form] = useForm();

    useEffect(() => {
        getCategories()
    }, []);

    useEffect(() => {
        if(editedProduct){
            
            form.setFieldsValue (editedProduct)
            setFileList([{url: editedProduct.image }])
            setFileListGallery(
                editedProduct.galleries.map((item) => {
                    return { url: item.path };
                })
            );
        }
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

        const gallery = fileListGallery.map((item) => item.originFileObj);
        values["gallery[]"] = gallery;
        console.log(values);

        if(editProduct){
            editProduct(editedProduct.id, values, fileListGallery)
        }else{
            const {data} = await axios.post('/api/products', values, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if(data.success){
                addProduct(data.data)            
            } 
        }

        handleCancel()
         

    }
    
    const initialValues = {}

    const moveRow = useCallback(
        (dragIndex, hoverIndex) => {
            const dragRow = fileListGallery[dragIndex];
            setFileListGallery(
                update(fileListGallery, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragRow],
                    ],
                })
            );
        },
        [fileListGallery]
    );

    return (
        <div>
            <Form
                initialValues={initialValues}
                onFinish={submitHandler}
                form={form}
            >
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
                    label="weight"
                    name="weight"
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
                        onChange={({ fileList }) => setFileList(fileList)}
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

                <Form.Item label="Gallery" name="gallery">
                    <DndProvider backend={HTML5Backend}>
                        <Upload
                            beforeUpload={() => false}
                            onChange={({ fileList }) =>
                                setFileListGallery(fileList)
                            }
                            listType="picture-card"
                            maxCount={5}
                            onPreview={onPreview}
                            fileList={fileListGallery}
                            itemRender={(originNode, file, currFileList) => (
                                <DragableUploadListItem
                                  originNode={originNode}
                                  file={file}
                                  fileList={currFileList}
                                  moveRow={moveRow}
                                />
                            )}
                        >
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </DndProvider>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" className='admin-btn'>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdditionForm;
