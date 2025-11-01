import React from 'react';
import RightSide from '../components/structure/rightSide/RightSide';
import Header from '../components/structure/Header';

const DetailsLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>

                </div>
                <div className='col-span-3'>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default DetailsLayout;