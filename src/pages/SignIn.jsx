import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const SignIn = () => {

    const { signInUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
            .then(() => {
                toast.success('Login Successful')
                navigate(location?.state || '/news/1')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <div className='max-w-[650px] mx-auto w-full px-[73px] py-[76px] border border-gray-50 rounded-md shadow space-y-10'>
            <h1 className='text-center font-semibold text-4xl dark2'>Login Your Account</h1>
            <hr className='text-[#E7E7E7]' />
            <div className='px-4'>
                <form onSubmit={handleSignIn} className='flex flex-col'>
                    <label className="font-semibold text-xl dark2 mb-4">Email address</label>
                    <input type="email" name='email' className="input input-xl text-base w-full dark7 outline-0 mb-6" placeholder="Enter your email address" />
                    <label className="font-semibold text-xl dark2 mb-4">Password</label>
                    <input type="password" name='password' className="input input-xl text-base w-full dark7 outline-0 mb-2" placeholder="Enter your password" />
                    <div className='mb-6'><a className="link link-hover text-sm">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral w-full btn-lg">Login</button>
                </form>
                <p className='font-semibold text-center dark3 mt-6'>Don't Have An Account? <Link to={'/auth/sign-up'} className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default SignIn;