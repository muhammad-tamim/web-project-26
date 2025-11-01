import React from 'react';
import RightSide from '../components/structure/rightSide/RightSide';
import Header from '../components/structure/Header';
import Navbar from '../components/structure/Navbar';
import { Outlet } from 'react-router';
import SocialLogin from '../components/structure/rightSide/SocialLogin';

const DetailsLayout = () => {
    return (
        <div>
            <div className='mb-10'>
                <Navbar></Navbar>
            </div>

            <div className='hidden lg:grid  grid-cols-12 gap-3'>
                <div className='col-span-9'>
                    <h1 className='font-semibold text-xl dark2 mb-5'>Dragon News</h1>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    <RightSide></RightSide>
                </div>
            </div>

            {/* for small screen */}
            <div className='lg:hidden mt-10 space-y-10'>
                <div className='text-center'>
                    <SocialLogin></SocialLogin>
                </div>
                <div>
                    <h1 className='font-semibold text-xl dark2 mb-5'>Dragon News</h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DetailsLayout;