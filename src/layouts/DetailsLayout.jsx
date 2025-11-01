import React from 'react';
import RightSide from '../components/structure/rightSide/RightSide';
import Header from '../components/structure/Header';
import Navbar from '../components/structure/Navbar';
import { Outlet } from 'react-router';

const DetailsLayout = () => {
    return (
        <div>
            <div className='mb-10'>
                <Navbar></Navbar>
            </div>

            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-9'>
                    <h1 className='font-semibold text-xl dark2 mb-5'>Dragon News</h1>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    <RightSide></RightSide>
                </div>
            </div>

        </div>
    );
};

export default DetailsLayout;