import React, { useEffect, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetailsPage = () => {

    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const news = useLoaderData()


    useEffect(() => {
        const filteredData = news.find(data => data.id === id);
        setSingleData(filteredData);
    }, [id, news])


    const { title, thumbnail_url, details, category_id } = singleData

    return (
        <div className='border border-[#E7E7E7] rounded-md p-3 md:p-6 space-y-5'>
            <img className='rounded-md w-full' src={thumbnail_url} alt="" />
            <h1 className='font-bold md:text-2xl dark2 md:max-w-[791px]'>{title}</h1>
            <p className='dark3 text-sm md:text-base'>{details}</p>
            <Link to={`/news/${category_id}`} className='flex items-center justify-start w-fit gap-1 btn btn-primary text-white font-medium'><GoArrowLeft size={20} /> <span>All news in this category</span></Link>
        </div>
    );
};

export default NewsDetailsPage;