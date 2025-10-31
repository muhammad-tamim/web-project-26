import React from 'react';
import { Link, useLocation } from 'react-router';

const PageNotFoundPage = () => {
    const location = useLocation();
    return (
        <div>
            <div className='min-h-[calc(100vh-105px)] flex flex-col items-center justify-center space-y-4'>
                <h1 className='font-bold text-5xl'>404</h1>
                <p className='text-primary-content/70 text-2xl'>No route matches URL "{location.pathname}"</p>
                <Link to={'/'}><button className='btn btn-primary rounded-full text-white btn-xl'>Home Page</button></Link>
            </div>
        </div>
    );
};

export default PageNotFoundPage;