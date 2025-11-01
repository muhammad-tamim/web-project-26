import React from 'react';
import Navbar from '../components/structure/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div >
            <div >
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-76px)] flex flex-col justify-center items-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;