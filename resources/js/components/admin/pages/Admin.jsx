import React from "react";
import { Link, Outlet } from "react-router-dom";


const Admin = () => {
    return (
        <>
            <div className="main-block p-3">
                <div className="sidebar">
                    <h2 className="my-3">Admin Sidebar</h2>
                    <hr />
                    <div className="list-group">
                        <Link
                            to={`/admin`}
                            className="list-group-item list-group-item-action "
                        >
                            Home
                        </Link>
                        <Link
                            to={`/admin/categories`}
                            className="list-group-item list-group-item-action"
                        >
                            Categories
                        </Link>
                        <Link
                            to={`/admin/products`}
                            className="list-group-item list-group-item-action"
                        >
                            Products
                        </Link>
                        <Link
                            to={`/admin/orders`}
                            className="list-group-item list-group-item-action"
                        >
                            Orders
                        </Link>
                    </div>
                    
                    <div className=" mt-5  ">
                    <Link to={`/`} className="Back-to-shop">
                        &lt;&nbsp;Back to site
                    </Link>
                    </div>
                    
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Admin;
