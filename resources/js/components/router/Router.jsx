import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../pages/Category';
import Home from "../pages/home";
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
