import React, { use } from 'react';
import { Link, replace, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const SignUp = () => {

    const { signUpUser, setUser, updateUserInfo } = use(AuthContext)

    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const url = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value

        signUpUser(email, password)
            .then((result) => {
                toast.success('Login Successful')
                const user = result.user

                updateUserInfo({ displayName: name, photoURL: url })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: url })
                        navigate('/news/1')
                    })
                    .catch(() => {
                        setUser(user)
                    })

            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='my-10 max-w-[650px] mx-auto w-full px-[73px] py-[76px] border border-gray-50 rounded-md shadow space-y-8'>
            <h1 className='text-center font-semibold text-4xl dark2'>Register your account</h1>
            <hr className='text-[#E7E7E7]' />
            <div className='px-4'>
                <form onSubmit={handleSignUp} className='flex flex-col'>
                    <label className="font-semibold text-xl dark2 mb-4">Your Name</label>
                    <input type="text" name='name' className="input input-xl text-base w-full dark7 outline-0 mb-6" placeholder="Enter your name" />
                    <label className="font-semibold text-xl dark2 mb-4">Photo URL</label>
                    <input type="url" name='url' className="input input-xl text-base w-full dark7 outline-0 mb-6" placeholder="Enter your photo url" />
                    <label className="font-semibold text-xl dark2 mb-4">Email address</label>
                    <input type="email" name='email' className="input input-xl text-base w-full dark7 outline-0 mb-6" placeholder="Enter your email address" />
                    <label className="font-semibold text-xl dark2 mb-4">Password</label>
                    <input type="password" name='password' className="input input-xl text-base w-full dark7 outline-0 mb-6" placeholder="Enter your password" />
                    <div className='mb-6 flex items-center gap-2'>
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <label className=" dark3">Accept Terms & Condition</label>
                    </div>
                    <button type='submit' className="btn btn-neutral w-full btn-lg">Register</button>
                </form>
                <p className='font-semibold text-center dark3 mt-6'>Already Have An Account? <Link to={'/auth/sign-in'} className='text-red-500'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;