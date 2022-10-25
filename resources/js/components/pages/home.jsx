import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        getHomePageData()
    }, []);

    const getHomePageData = async() => {
        await axios.get('/api/home')
        .then(({data}) => {
            setCategories(data.categories)
        })
    }

    return (
        <div className='container'>
            
            <h1>Categories</h1>

            <div className="categories-list">
                {categories.map((category) => (
                <div className="categories_item" key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </div>
                    
                ))}
            </div>

        </div>
    );
}

export default Home;
