import React, { Suspense } from 'react';
import logo from '../../assets/logos/logo.png'
import { format } from 'date-fns';
import ShowMarquee from '../ui/ShowMarquee';
import LoadingSpinner from '../ui/LoadingSpinner';


const fetchData = fetch("/news.json").then(res => res.json())

const Header = () => {

    return (
        <div className='text-center mt-4 md:mt-8 lg:mt-12'>
            <img className='mx-auto mb-5' src={logo} alt="logo-image" />
            <p className='mb-2.5 text-sm md:text-lg dark3'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-sm md:text-xl dark3'><span className='dark2'>{format(new Date(), "eeee, ")}</span>{format(new Date(), "MMMM dd, yyyy")}</p>

            <div className='mt-7 flex items-center gap-2 md:gap-5 dark7 p-1  md:p-4'>
                <button className='btn btn-primary text-white font-medium btn-sm  md:btn-md md:text-xl md:px-6'>Latest</button>

                <Suspense fallback={<span className="mx-auto loading loading-spinner loading-lg"></span>}>
                    <ShowMarquee fetchData={fetchData}></ShowMarquee>
                </Suspense>

            </div>
        </div>
    );
};

export default Header;