import React from 'react';
import logo from '../../assets/logos/logo.png'
import { format } from 'date-fns';

const Header = () => {

    // const date = new Date();

    // const formattedDate = date.toLocaleString('en-us', {
    //     weekday: 'long',
    //     month: 'long',
    //     day: 'numeric',
    //     year: 'numeric',
    // })
    // const convertedFormattedDate = (formattedDate.split(','))

    return (
        <div className='text-center px-6 mt-4 md:mt-8 lg:mt-12'>
            <img className='mx-auto mb-5' src={logo} alt="logo-image" />
            <p className='mb-2.5 text-sm md:text-lg dark3'>Journalism Without Fear or Favour</p>
            {/* <p className='font-medium text-sm md:text-xl dark3 '><span className='dark2'>{convertedFormattedDate[0]},</span>{convertedFormattedDate.splice(1).map((date, index) => <span key={index}>{date}</span>)}</p> */}

            <p className='font-medium text-sm md:text-xl dark3'><span className='dark2'>{format(new Date(), "eeee, ")}</span>{format(new Date(), "MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;