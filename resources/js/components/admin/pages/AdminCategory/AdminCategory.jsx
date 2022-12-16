import React, { useEffect, useState } from 'react';
import {Table } from 'antd';
import getColumnsCategory from './Columns';
import AddCategory from './add-modal/AddCategory';
import EditCategory from './edit-modal/EditCategory';

const AdminCategory = () => {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedCategory, setEditedProduct] = useState({});
    const [loading, setLoading] = useState(false);



    const getCategories = async () => {
        setLoading(true)
        const response =await axios.get('/api/categories');
        console.log(response);
        setCategories(response.data);
        setLoading(false)
    }

    useEffect(() => {
        getCategories();
    }, []);

    const removeCategory = async(id) => {
        setCategories(categories.filter(p => p.id !== id))
        const response = await axios.delete("/api/categories/" + id)
    }
  
    const addCategories = (category) =>{
        setCategories([...categories, category])
    }

    const editCategory = async(id, values) => {
        const {data} = await axios.post("/api/categories/" + id, values, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const updatedCategory = _.cloneDeep(categories)
        const category = updatedCategory.find(p => p.id === id)
        _.assign(category, data.data)        
        setCategories(updatedCategory)
    }
   

    return (
        <div className='container '>
            <h2 className='my-3'>Categories</h2>
            <AddCategory addCategories={addCategories}/>
            <EditCategory isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} editedCategory={editedCategory} editCategory={editCategory} />
            <Table loading={loading} dataSource={categories} columns={getColumnsCategory(removeCategory, setEditedProduct, setIsModalOpen)} rowKey='id' pagination={{pageSize: 9}}/>
        </div >
    );
}

export default AdminCategory;
