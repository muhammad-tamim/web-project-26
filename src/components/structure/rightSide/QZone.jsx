import React from 'react';
import image1 from '../../../assets/images/swimming.png'
import image2 from '../../../assets/images/class.png'
import image3 from '../../../assets/images/playground.png'

const QZone = () => {
    return (
        <div className="p-4 dark7">
            <p className='font-semibold text-xl dark2 mb-5'>Q-Zone</p>
            <div>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>
    );
};

export default QZone;