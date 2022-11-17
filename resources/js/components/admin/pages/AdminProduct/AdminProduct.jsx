import axios from 'axios';
import React, {useState, useEffect}  from 'react';
import {Table } from 'antd';
import getColumns from './Columns';
import AddProduct from './add-modal/AddProduct';
import Edit from './edit/Edit';
import _ from 'lodash';

const AdminProduct = () => {

    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedProduct, setEditedProduct] = useState({});

    const getProducts = async () => {
        const response =await axios.get('/api/products');
        setProducts(response.data);
    }

    const addProduct = (product) =>{
        setProducts([...products, product])
    }

    const removeProduct = async(id) => {
        setProducts(products.filter(p => p.id !== id))
        const response = await axios.delete("/api/products/" + id)
    }

    const editProduct = async(id, values) => {
        const {data} = await axios.post("/api/products/" + id, values, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        const updatedProducts = _.cloneDeep(products)
        const product = updatedProducts.find(p => p.id === id)
        _.assign(product, data.data)        
        setProducts(updatedProducts)
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <div className='container'>
            <h1>Products</h1>
            <AddProduct addProduct={addProduct}/>
            <Edit isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} editedProduct={editedProduct} editProduct={editProduct} />
            <Table dataSource={products} columns={getColumns(removeProduct, setEditedProduct, setIsModalOpen)} rowKey='id' pagination={{pageSize: 6}} />
        </div>
    );
}

export default AdminProduct;
