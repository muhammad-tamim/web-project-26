import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <p className='font-semibold text-xl dark2 mb-5'>Login With</p>
            <div className='space-y-4'>
                {/* Google */}
                <button className="w-full btn btn-outline text-blue-500">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>

                {/* GitHub */}
                <button className="w-full btn btn-outline dark2">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;