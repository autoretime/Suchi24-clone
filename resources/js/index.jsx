import './bootstrap';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/CartProvider';
import "antd/dist/antd.css";
import AuthUserProvider from './providers/AuthUserProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthUserProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AuthUserProvider>
    </BrowserRouter>
);

