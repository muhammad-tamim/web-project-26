import React from 'react';
import Header from '../components/structure/Header';
import { Outlet } from 'react-router';
import Footer from '../components/structure/Footer';
import Navbar from '../components/structure/Navbar';
import LeftSide from '../components/structure/leftSide/LeftSide';
import RightSide from '../components/structure/rightSide/RightSide';

const HomeLayout = () => {
    return (
        <>
            <div>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-12 gap-6 mt-20 min-h-[calc(100vh-576px)]'>
                {/* left side */}
                <div className='col-span-3 border'>
                    <LeftSide></LeftSide>
                </div>
                {/* middle */}
                <div className='col-span-6 border'>
                    <Outlet></Outlet>
                </div>
                {/* right side */}
                <div className='col-span-3 border h-fit'>
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