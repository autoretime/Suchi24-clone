import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import IncAndDec from './IncAndDec/IncAndDec';
import Category from './Category';


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
            <div className="cards mb-3">
                <div className="row d-flex justify-content-center p-2">
                    <div className="col-md-4 img-block">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-product "
                        />
                        {/* <Splide aria-label="My Favorite Images">
                            {product.galleries?.map((item) => (
                                <SplideSlide>
                                    <img
                                        src={item.path}
                                        key={item.id}
                                        alt={item.name}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide> */}
                    </div>
                    <div className="col-md-6 price-block">
                        <div className="card-bodys">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-texts">
                                <strong>Склад:</strong> <br />{" "}
                                {product.description}
                            </p>
                            <p className="card-text-price">
                                <small className="text-muted price">
                                    Ціна:{product.price}₴
                                </small>
                                {product.category_id === 64 ? (
                                    <small className="text-muted price">
                                        Вага:{product.weight}л.
                                    </small>
                                ) : (
                                    <small className="text-muted price">
                                        Вага:{product.weight}г.
                                    </small>
                                )}
                            </p>
                            <div className="input-group mb-3">
                                {/* <input
                                    type="number"
                                    name="amount"
                                    className="form-control"
                                    value={amount}
                                    min="1"
                                    onChange={({ target }) =>
                                        setAmount(target.value)
                                    }
                                />{" "} */}
                                <IncAndDec/>
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-success"
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

            <div className="Stock">
                <div className="stock-position">
                    <Category
                    
                    cat={product.category_id}
                    />
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
