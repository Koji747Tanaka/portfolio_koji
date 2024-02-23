import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent, Typography, Link } from '@mui/material';
import './CardSliderStyles.css'; 

const CardSlider = ({ data, linkToFullText }) => {
    
    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,  
        slidesToSlide: 1, 
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,  
        slidesToSlide: 1,
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,  
        slidesToSlide: 1,
        partialVisibilityGutter: 40 
        }
    };

    const truncateDescription = (description, maxLength = 2) => {
        return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
    }
    

return (
    <Carousel 
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        partialVisible={true}
    >
        {data.map((item, index) => (
        <Card key={index} sx={{ minWidth: 200, height: '65vh', margin: '0 10px', boxShadow: 3 }}>
            <CardContent>
            <Typography variant="h5" component="div">
                {item.title}
            </Typography>
            <Typography variant="h6" component="div">
                {item.subtitle}
            </Typography>
            <Typography variant="body2">
                {!linkToFullText ? item.description : truncateDescription(item.description)}
            </Typography>
            {linkToFullText && (
                <Link component="button" variant="body2">
                    Read whole description
                </Link>
            )}
            </CardContent>
        </Card>
        ))}
    </Carousel>
);
};

export default CardSlider;
