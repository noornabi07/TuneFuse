import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;