import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

const MainPage = () => {
    return (
        <>
            <Header />
            <div className='main-block p-5'>
                <div className='content'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainPage;