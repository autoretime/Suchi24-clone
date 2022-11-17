import React , { useContext }from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminCategory from '../components/admin/pages/AdminCategory/AdminCategory';
import AdminOrder from '../components/admin/pages/AdminOrder/AdminOrder';
import AdminOrderDetails from '../components/admin/pages/AdminOrder/AdminOrderDetails';
import AdminProduct from '../components/admin/pages/AdminProduct/AdminProduct';
import Category from '../components/pages/Category';
import Home from "../components/pages/home";
import Login from '../components/pages/Authorization/Login';
import NotFound from '../components/pages/NotFound/NotFound';
import Order from '../components/pages/order/Order';
import OrderThank from '../components/pages/order/OrderThank';
import Product from '../components/pages/Product';
import Registration from '../components/pages/Authorization/Registration';
import AuthUserContext from "../contexts/AuthUserContext";
import '../../css/app.css'
import SearchResult from '../components/pages/SearchResult';

const Router = () => {

    const [authUser] =useContext(AuthUserContext);

    const adminRoutes = () => {
        return authUser?.role !== "admin" ? (
            ""
        ) : (
            <Route path="/admin">
                <Route path="" element={<h1> Dashboard</h1>} />
                <Route path="categories" element={<AdminCategory/>} />
                <Route path="products" element={ <AdminProduct/> } />
                <Route path="orders" element={<AdminOrder />} />
                <Route path="orders/:id" element={<AdminOrderDetails />} />
            </Route>
        );
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-thank" element={<OrderThank />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/search" element={<SearchResult />} />
            {adminRoutes()}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
