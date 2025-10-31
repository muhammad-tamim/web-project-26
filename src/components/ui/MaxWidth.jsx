import React from 'react';

const MaxWidth = ({ children }) => {
    return (
        <div className='w-10/12 mx-auto max-w-[1920px]'>
            {children}
        </div>
    );
};

export default MaxWidth;