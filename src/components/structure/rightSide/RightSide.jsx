import React from 'react';
import SocialLogin from './SocialLogin';
import SocialLinks from './SocialLinks';
import QZone from './QZone';
import Ads from './Ads';

const RightSide = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <SocialLinks></SocialLinks>
            <QZone></QZone>
            <Ads></Ads>
        </div>
    );
};

export default RightSide;