import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoMdEye } from 'react-icons/io';
import { Link } from 'react-router';

const CategoryNewsCard = ({ singleData }) => {
    const { id, title, rating, total_view, thumbnail_url, details, author } = singleData

    const date = new Date(author.published_date)
    const formattedDate = date.toLocaleDateString("en-CA")

    return (
        <div className='mb-7 border border-[#E7E7E7] rounded-md'>
            <div className='flex items-center justify-between dark7 px-5 py-3 mb-3.5'>
                <div className='flex items-center gap-3'>
                    <img className='size-10 rounded-full' src={author.img} alt="" />
                    <div>
                        <p className='font-medium dark2'>{author.name}</p>
                        <p className='font-light dark3 text-sm'>{formattedDate}</p>
                    </div>
                </div>
                <div className='flex gap-2.5'>
                    <CiBookmark className='dark3 cursor-pointer' size={24} />
                    <CiShare2 className='dark3 cursor-pointer' size={24} />
                </div>
            </div>
            <div className='px-5'>
                <h1 className='pb-5 font-semibold text-xl dark2'>{title}</h1>
                <div className='mb-8'>
                    <img className='rounded-md w-full' src={thumbnail_url} alt="" />
                </div>
                <p className='dark3'>{details.length > 200 ? `${details.slice(0, 200)}...` : details}</p>
                <div className='mb-5'>
                    {details.length > 200 && <Link to={`/news-details/${id}`} className='font-medium bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent'>Read More</Link>}
                </div>
                <hr className='text-[#E7E7E7] mb-5' />
                <div className='mb-5 flex items-center justify-between'>

                    <div className='flex gap-2.5 items-center'>
                        {[...Array(rating.number)].map((_, index) => <FaStar key={index} className='text-[#FF8C47]' size={20} />)}
                        <p className='dark3 font-medium text-lg'>{rating.number}</p>
                    </div>

                    <div className='flex items-center gap-2.5'>
                        <IoMdEye size={20} className='dark3' />
                        <p className='dark3'>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryNewsCard;