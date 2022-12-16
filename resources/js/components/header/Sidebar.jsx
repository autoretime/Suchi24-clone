import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'


const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getHomePageData();
    }, []);

    const getHomePageData = async () => {
        await axios.get('/api/home')
            .then(({ data }) => {
                setCategories(data.categories);

            })
    }

    return (
        <div className="header d-f j-c-s-b p-10 a-i-c">
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.id}`}
                        className=" list-group-item-action"
                        key={category.id}
                    >
                        {category.name}
                    </Link>
                ))}
        </div>
    );
}

export default Sidebar;
