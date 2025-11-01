import React, { Suspense } from 'react';
import Header from '../components/structure/Header';
import { Outlet } from 'react-router';
import Footer from '../components/structure/Footer';
import Navbar from '../components/structure/Navbar';
import LeftSide from '../components/structure/leftSide/LeftSide';
import RightSide from '../components/structure/rightSide/RightSide';
import ShowMarquee from '../components/ui/ShowMarquee';
import CategoryMenuItems from '../components/structure/leftSide/CategoryMenuItems';
import SocialLogin from '../components/structure/rightSide/SocialLogin';


const fetchData = fetch("/news.json").then(res => res.json())

const HomeLayout = () => {
    return (
        <>
            <div>
                <Header></Header>

                <div className='mt-7 flex items-center gap-2 md:gap-5 dark7 p-1  md:p-4'>
                    <button className='btn btn-primary text-white font-medium btn-sm  md:btn-md md:text-xl md:px-6'>Latest</button>

                    <Suspense fallback={<span className="mx-auto loading loading-spinner loading-lg"></span>}>
                        <ShowMarquee fetchData={fetchData}></ShowMarquee>
                    </Suspense>

                </div>

                <Navbar></Navbar>
            </div>


            <div className='hidden lg:grid grid-cols-12 gap-6 mt-20 min-h-[calc(100vh-576px)]'>
                {/* left side */}
                <div className='col-span-3 h-screen overflow-y-auto scrollbar sticky top-4'>
                    <LeftSide></LeftSide>
                </div>
                {/* middle */}
                <div className='col-span-6'>
                    <Outlet></Outlet>
                </div>
                {/* right side */}
                <div className='col-span-3 max-h-screen overflow-y-auto scrollbar sticky top-4'>
                    <RightSide></RightSide>
                </div>
            </div>

            {/* news and left+right side bar for small screen */}
            <div className='lg:hidden mt-10 space-y-10'>
                <div className='text-center'>
                    <SocialLogin></SocialLogin>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default HomeLayout;