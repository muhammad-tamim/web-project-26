import React from 'react';
import Header from '../components/structure/Header';
import { Outlet } from 'react-router';
import Footer from '../components/structure/Footer';
import Navbar from '../components/structure/Navbar';
import LeftSide from '../components/structure/LeftSide';
import RightSide from '../components/structure/RightSide';

const HomeLayout = () => {
    return (
        <>
            <div>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-12'>
                {/* left side */}
                <div className='col-span-3'>
                    <LeftSide></LeftSide>
                </div>
                {/* middle */}
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                {/* right side */}
                <div className='col-span-3'>
                    <RightSide></RightSide>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default HomeLayout;