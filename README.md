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


3. How to use date-fns: 

```jsx
<p className="font-semibold text-accent">{format(new Date(), "EEEE, MMMM MM, yyyy")}</p> 
// Tuesday, October 10, 2025
```

4. How to use react-fast-marquee

```jsx
import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-5 bg-base-200 p-3">
            <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

            <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
                <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                    accusantium?
                </p>
                <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                    accusantium?
                </p>
                <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                    accusantium?
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
```

## What Challenges I Face While Building This Project:

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
 