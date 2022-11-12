import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Category = () => {
    const { id } = useParams();
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategoryPageData();
    }, [id]);

    const getCategoryPageData = async () => {
        await axios.get(`/api/category/${id}`).then(({ data }) => {
            setCategory(data.category);
            setProducts(data.products);
        });
    };

    const productsMaps = (product) => (
        <div className="product_item " key={product.id} >
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} alt={product.name} className="card-img-top " />
                <div className="product_name text-center ">{product.name}</div>
                <div className="product_price text-left">Price:{product.price}$</div>
            </Link>
        </div>
    );

    return (
        <div className="container">
            <h1 className="text-center">{category}</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card ">
                        <div className="card-body">
                            <div className="product_list">
                                {products.map(productsMaps)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
