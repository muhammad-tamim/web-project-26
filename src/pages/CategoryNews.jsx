import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CategoryNewsCard from '../components/ui/CategoryNewsCard';

const CategoryNews = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const intId = parseInt(id)
    const news = useLoaderData()

    useEffect(() => {
        if (intId === 0) {
            setData(news)
        }
        else if (intId === 1) {
            const filteredId = news.filter((singleNews) => singleNews.others.is_today_pick === true)
            setData(filteredId)
        }
        else {
            const filteredId = news.filter((singleNews) => singleNews.category_id === intId)
            setData(filteredId)
        }
    }, [news, intId])

    return (
        <div>
            <p className='font-semibold text-xl dark2 mb-5'>Dragon News Home</p>
            {data.map((singleData) => <CategoryNewsCard key={singleData.id} singleData={singleData}></CategoryNewsCard>)}
        </div>
    );
};

export default CategoryNews;