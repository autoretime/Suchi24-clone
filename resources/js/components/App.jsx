import React from 'react';
import Router from './router/Router';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Navbar from './Navbar';


const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Router />
        </>
    );
}

export default App;

