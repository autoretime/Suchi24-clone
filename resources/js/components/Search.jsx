import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {

    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    const searchHandler = async({target}) => {
        setSearchText(target.value)
        if(target.value){
            const {data} = await axios.get(`/api/search?q=${target.value}`)
            setProducts(data)
            return
        }
        setProducts([])
    }

    const searchPageHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/search?q=${searchText}`)

    }
    
    return (
        <div className="search-block">
            <form className="d-flex" action='/search' onSubmit={searchPageHandler}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    name="q"
                    value={searchText}
                    onInput={searchHandler}
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Search
                </button>
            </form>

            {products.length === 0 ? (
                ""
            ) : (
                <div className="search-result">
                    <ul>
                        {products.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={`/product/${item.id}`}
                                    onClick={() => {
                                        navigate(`/product/${item.id}`);

                                        setProducts([]);
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Search;
