import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#E7E7E7]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;