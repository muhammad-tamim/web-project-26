import React, { use } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router';

const ShowMarquee = ({ fetchData }) => {
    const data = use(fetchData)

    const latestNews = data.filter((news) => news.others.is_today_pick === true)
    return (
        <Marquee pauseOnHover={true}>
            {latestNews.map((news) => <Link to={`/news-details/${news.id}`} className='mr-5 cursor-pointer hover:underline' key={news.id}>{news.title}</Link>)}
        </Marquee>
    );
};

export default ShowMarquee;