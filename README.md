## Project Name: 

## What Problem I Solve By This Project: 

## Live Site Link: 

## Features:

## What I Learned New While Building This Project: 

1. how to implement just light theme: 

If you use daisyui by default our theme dark/light depend on the os default theme, if we want just a light theme we can use 

```html
<html data-theme="light">
```
or

```css
@plugin "daisyui" {
themes: light --default;
}
```

2. How to see figma design layout grid:  

- press to the left side: layers/Desktop-2
- press to the right side layout grid eye icon

![image](./src//assets/images/readme-images/how-to-see-layout-grid-on-figma.png)


3. How to use date-fns instead of raw js: 

```
import React from 'react';
import logo from '../../assets/logos/logo.png'

const Header = () => {

    const date = new Date();

    const formattedDate = date.toLocaleString('en-us', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })
    const convertedFormattedDate = (formattedDate.split(','))
    console.log(convertedFormattedDate.slice(1));
    return (
        <div className='text-center px-6 mt-4 md:mt-8 lg:mt-12'>
            <img className='mx-auto mb-5' src={logo} alt="logo-image" />
            <p className='mb-2.5 text-sm md:text-lg dark3'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-sm md:text-xl dark3 '><span className='dark2'>{convertedFormattedDate[0]},</span>{convertedFormattedDate.splice(1).map((date, index) => <span key={index}>{date}</span>)}</p>
        </div>
    );
};

export default Header;
```

```jsx
import React from 'react';
import logo from '../../assets/logos/logo.png'
import { format } from 'date-fns';

const Header = () => {

    // const date = new Date();

    // const formattedDate = date.toLocaleString('en-us', {
    //     weekday: 'long',
    //     month: 'long',
    //     day: 'numeric',
    //     year: 'numeric',
    // })
    // const convertedFormattedDate = (formattedDate.split(','))

    return (
        <div className='text-center px-6 mt-4 md:mt-8 lg:mt-12'>
            <img className='mx-auto mb-5' src={logo} alt="logo-image" />
            <p className='mb-2.5 text-sm md:text-lg dark3'>Journalism Without Fear or Favour</p>
            {/* <p className='font-medium text-sm md:text-xl dark3 '><span className='dark2'>{convertedFormattedDate[0]},</span>{convertedFormattedDate.splice(1).map((date, index) => <span key={index}>{date}</span>)}</p> */}

            <p className='font-medium text-sm md:text-xl dark3'><span className='dark2'>{format(new Date(), "eeee, ")}</span>{format(new Date(), "MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
```

4. How to use react-fast-marquee

```jsx
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
```

## What Challenges I Face While Building This Project:

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
 