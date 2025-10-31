import React, { use } from 'react';
import Marquee from "react-fast-marquee";

const ShowMarquee = ({ fetchData }) => {
    const data = use(fetchData)

    const latestNews = data.filter((news) => news.others.is_today_pick === true)
    return (
        <Marquee pauseOnHover={true}>
            {latestNews.map((news) => <span className='mr-5' key={news.id}>{news.title}</span>)}
        </Marquee>
    );
};

export default ShowMarquee;