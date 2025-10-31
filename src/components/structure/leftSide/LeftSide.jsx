import React, { Suspense } from 'react';
import CategoryMenuItems from './CategoryMenuItems';
import LeftSideNews from './LeftSideNews';

const fetchCategories = fetch('/categories.json').then(res => res.json())

const LeftSide = () => {
    return (
        <div>
            <p className='font-semibold text-xl dark2 mb-5'>All Category</p>
            <div className=''>
                <Suspense fallback={<span className="mx-auto flex loading loading-spinner loading-xl"></span>}>
                    <CategoryMenuItems fetchCategories={fetchCategories}></CategoryMenuItems>
                </Suspense>
            </div>
            <LeftSideNews></LeftSideNews>
        </div>
    );
};

export default LeftSide;