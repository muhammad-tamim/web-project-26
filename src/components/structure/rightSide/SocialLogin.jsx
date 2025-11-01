import React, { use } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthContext';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const { signInUserWithGoogle, signInUserWithGithub } = use(AuthContext);

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(() => {
                toast.success("SignIn successful");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleGithubSignIn = () => {
        signInUserWithGithub()
            .then(() => {
                toast.success("SignIn successful");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <p className='font-semibold text-xl dark2 mb-5'>Login With</p>
            <div className='space-y-4'>
                {/* Google */}
                <button onClick={handleGoogleSignIn} className="w-full btn btn-outline text-blue-500">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>

                {/* GitHub */}
                <button onClick={handleGithubSignIn} className="w-full btn btn-outline dark2">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;