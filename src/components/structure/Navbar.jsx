import React, { Suspense } from 'react';
import userLogo from '../../assets/logos/user.png';
import { Link, NavLink } from 'react-router';
import { CiMenuFries } from 'react-icons/ci';
import CategoryMenuItems from './leftSide/CategoryMenuItems';

const fetchCategories = fetch('/categories.json').then(res => res.json())

const Navbar = () => {
    const navItems = <>
        <NavLink to="/news/1" className={({ isActive }) => isActive ? "underline text-lg dark3" : "text-lg dark3"}>Home</NavLink>
        <NavLink to={"/about"} className={({ isActive }) => isActive ? "underline text-lg dark3" : "text-lg dark3"}>About</NavLink>
        <NavLink to={"/career"} className={({ isActive }) => isActive ? "underline text-lg dark3" : "text-lg dark3"}>Career</NavLink>
    </>
    return (
        <div className='flex items-center justify-between mt-8'>
            <div>
                <div className="drawer drawer-end lg:hidden">
                    <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-5" className="drawer-button btn btn-sm"><CiMenuFries size={18} /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu space-y-5 bg-base-200 min-h-full w-60 p-4">
                            {/* Sidebar content here */}
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                {navItems}
                            </div>
                            <hr className='text-gray-300' />
                            <Suspense fallback={<span className="mx-auto flex loading loading-spinner loading-xl"></span>}>
                                <CategoryMenuItems fetchCategories={fetchCategories}></CategoryMenuItems>
                            </Suspense>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' gap-10 hidden md:flex'>
                {navItems}
            </div>
            <div className='flex gap-2 items-center'>
                <img className='size-8 md:size-11' src={userLogo} alt="" />
                <Link to={'/auth/sign-in'} className='btn btn-secondary text-white font-medium btn-sm  md:btn-md md:text-xl md:px-6'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;