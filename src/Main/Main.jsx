import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-150px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;