import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div>
            <p className='font-semibold text-xl dark2 mb-5'>Find Us On</p>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-transparent justify-start py-8 text-base 
                gap-2.5"><FaFacebook className='btn btn-circle btn-xs dark7 p-2 size-10 text-blue-500'></FaFacebook> Instagram</button>
                <button className="btn join-item bg-transparent justify-start py-8 text-base 
                gap-2.5"><FaTwitter className='btn btn-circle btn-xs dark7 p-2 size-10 text-blue-400'></FaTwitter> Instagram</button>
                <button className="btn join-item bg-transparent justify-start py-8 text-base 
                gap-2.5"><FaInstagram className='btn btn-circle btn-xs dark7 p-2 size-10 text-red-500'></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default SocialLinks;