import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Category = ({cat}) => {
    const { id } = useParams();

    const [category, setCategory] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategoryPageData();
    }, [id]);

    const getCategoryPageData = async () => {
        await axios.get(`/api/category/${id}`)
            .then(({ data }) => {
                setCategory(data.category);
                setProducts(data.products);
            })
    }
    

    const productsMaps = (product) => {
        return (
            <Card style={{ width: "18rem" }} key={product.id}>
                <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none"
                >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title className="Name">{product.name}</Card.Title>
                        <Card.Text className="product_price d-flex">
                            {product.price}₴{" "}
                            {product.category_id === 64 ? (
                                <span>{product.weight} л.</span>
                            ) : (
                                <span>{product.weight} гр.</span>
                            )}
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        );
    }

    return (
        <div className='container'>
            <h2 className='my-3'>{category}</h2>
            <hr className='py-2' />
            <div className="product_list">
                {products.map(productsMaps)}
            </div>
        </div>
    );
}

export default Category;