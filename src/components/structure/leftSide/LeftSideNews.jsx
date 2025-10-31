import React from 'react';
import image1 from '../../../assets/images/left-side-news-1.png'
import image2 from '../../../assets/images/left-side-news-2.png';
import image3 from '../../../assets/images/left-side-news-3.png';
import { FaCalendar } from 'react-icons/fa';

const LeftSideNews = () => {

    const newsItems = [
        {
            id: 1,
            image: image1,
            title: 'Tips to make your space cozy and functional.',
            date: 'Sep 20, 2025',
            category: 'Home Decor',
        },
        {
            id: 2,
            image: image2,
            title: 'Zoom meeting etiquette: How to look and sound your best.',
            date: 'Oct 15, 2025',
            category: 'Online Meeting',
        },
        {
            id: 3,
            image: image3,
            title: 'Fifa World Cup 2026: What to expect from the tournament.',
            date: 'Jan 10, 2025',
            category: 'sports',
        }
    ];

    return (
        <div className='mt-7 space-y-8'>
            {newsItems.map((item) => <div key={item.id}>
                <img className='w-full mb-2' src={item.image} alt="" />
                <h1 className='text-xl mb-1 font-semibold dark2 hover:underline cursor-pointer'>{item.title}</h1>
                <div className='flex items-center gap-5'>
                    <p className='dark2 font-medium'>{item.category}</p>
                    <p className='dark4 font-medium flex items-center gap-2'>
                        <FaCalendar></FaCalendar>
                        {item.date}
                    </p>
                </div>
            </div>)}
        </div>
    );
};

export default LeftSideNews;