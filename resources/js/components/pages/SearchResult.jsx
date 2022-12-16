import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get(`/api/search?q=${query}`);
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

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
        )
    }

    return (
        <div className='container'>
            <h2 className='my-3'>Search result for: "{query}"</h2>
            {products.length === 0
                ? <p>Nothing found</p>
                : <div className="product_list">
                    {products.map(productsMaps)}
                </div>
            }

        </div>
    );
}

export default SearchResult;