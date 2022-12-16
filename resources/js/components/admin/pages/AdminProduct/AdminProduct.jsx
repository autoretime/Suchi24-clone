import axios from 'axios';
import React, {useState, useEffect}  from 'react';
import { Input, Table } from 'antd';
import getColumns from './Columns';
import AddProduct from './add-modal/AddProduct';
import Edit from './edit/Edit';
import _ from 'lodash';

const AdminProduct = () => {

    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedProduct, setEditedProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchText, setSearchText] = useState('');
    let [filteredData] = useState();

    const getProducts = async () => {
        setLoading(true)
        const response =await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false)
    }

    const addProduct = (product) =>{
        setProducts([...products, product])
    }

    const removeProduct = async(id) => {
        setProducts(products.filter(p => p.id !== id))
        const response = await axios.delete("/api/products/" + id)
    }

    const editProduct = async(id, values, fileListGallery) => {
        values["gallery[]"] = fileListGallery.map((item) =>
            item.url ? item.url : item.name
        );
        values["newImages[]"] = fileListGallery
            .filter((item) => item.originFileObj)
            .map((item) => item.originFileObj);

        const {data} = await axios.post("/api/products/" + id, values, {
            
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        data.data.galleries = data.data.newGalleries
        const updatedProducts = _.cloneDeep(products)
        const product = updatedProducts.find(p => p.id === id)
        _.assign(product, data.data)        
        setProducts(updatedProducts)
    }

    useEffect(() => {
        getProducts()
    }, []);

    const globalChange = () => {
        filteredData = products.filter((value) => { 
            console.log(value.price);
            return (                
                value.name.toLowerCase().includes(searchText.toLowerCase())|| 
                value.category.name.toLowerCase().includes(searchText.toLowerCase())
            );
        })
        setProducts(filteredData);
    }

    const Change = (e) => {
        setSearchText(e.target.value)
        if(e.target.value === ''){
            getProducts()
        }
    }


    return (
        <div className="container">
            <h1>Products</h1>

            <div className='items'>
                <AddProduct addProduct={addProduct} />
                <Input.Search
                    placeholder="Search here ..."
                    style={{ margin: 10, width: 500 , }}
                    allowClear
                    value={searchText}
                    onChange={Change}
                    onSearch={globalChange}
                />                    
            </div>

            <Edit
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                editedProduct={editedProduct}
                editProduct={editProduct}
            />
            
            <Table
                loading={loading}
                dataSource={filteredData && filteredData.length ?  filteredData: products}
                columns={getColumns(
                    removeProduct,
                    setEditedProduct,
                    setIsModalOpen,
                    searchText

                )}
                rowKey="id"
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    onChange: (page, pageSize) => {
                        setPage(page), setPageSize(pageSize);
                    },
                }}
            />
        </div>
    );
}

export default AdminProduct;
