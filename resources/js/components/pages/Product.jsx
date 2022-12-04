import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [amount, setAmount] = useState(1);

    const {addCartItem, modalShow} = useContext(CartContext);

    useEffect(() => {
        getProductPageData();
    }, [id]);

    const getProductPageData = async () => {
        await axios.get(`/api/product/${id}`).then(({ data }) => {
            setProduct(data.product);
            console.log(data.product);
        });
    };
    
    return (
        <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        {/* <img
                            src={product.image}
                            alt={product.name}
                            className="img-product rounded-start"
                        /> */}
                        <Splide aria-label="My Favorite Images">
                            {product.galleries?.map((item) => (
                                <SplideSlide>
                                    <img
                                        src={item.path}
                                        key={item.id}
                                        alt={item.name}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">
                                <small className="text-muted price">
                                    {product.price}UAH
                                </small>
                            </p>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    name="amount"
                                    className="form-control"
                                    value={amount}
                                    min="1"
                                    onChange={({ target }) =>
                                        setAmount(target.value)
                                    }
                                />{" "}
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-primary"
                                        type="button"
                                        onClick={() => {
                                            addCartItem({ ...product, amount });
                                            modalShow();
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <div>{product.price}UAH</div>
            <input
                type="number"
                name="amount"
                value={amount}
                min="1"
                onChange={({ target }) => setAmount(target.value)}
            />{" "}
            <button>Add to Cart</button>
            <div>{product.description}</div> */}
        </div>
    );
}

export default Product;
