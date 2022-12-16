import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/carousel";


const Home = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getHomePageData();
    }, []);

    const getHomePageData = async () => {
        await axios.get("/api/home").then(({ data }) => {
            setCategories(data.categories);
            setProducts(data.products)
        });
    };
    
    


    return (
        <div className="container">
            <Carousel/>

            <div className="gridtime">
                {categories.map((category) => (
                    <div className="categories_item" key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="b-pict">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                        />
                                        <h4 className="b-pict-caption">
                                            {category.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div>
            </div>
        </div>
    );
};

export default Home;
