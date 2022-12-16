import { Avatar, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = ({setIsModalOpen, isModalOpen}) => {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const searchHandler = async ({ target }) => {
        setSearchText(target.value);
        if (target.value) {
            const { data } = await axios.get(`/api/search?q=${target.value}`);
            setProducts(data);
            return;
        }
        setProducts([]);
    };

    const searchPageHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/search?q=${searchText}`);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <Modal
            title="Шукай що треба :)"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
        >
            <div className="search-block">
                <form
                    className="Search-bar "
                    action="/search"
                    onSubmit={searchPageHandler}
                >
                    <div className="input-search">
                        <div className="form-outline">
                            <input
                                className="form-control "
                                type="search"
                                name="q"
                                value={searchText}
                                onInput={searchHandler}
                                id="form1"
                                placeholder="Type to search"
                            />
                        </div>
                    </div>
                </form>

                {products.length === 0 ? (
                    ""
                ) : (
                    <div className="search-result ">
                        <ul>
                            {products.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={`/product/${item.id}`}
                                        onClick={() => {
                                            navigate(`/product/${item.id}`);
                                            setProducts([]);
                                            handleCancel()

                                        }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Avatar
                                                src={item.image}
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                }}
                                            />
                                            {item.name}

                                            <div>{item.price} ₴</div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default Search;
