import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent, Typography, Link, CardMedia, Button} from '@mui/material';
import './CardSliderStyles.css'; 
import useIntersectionObserver from './useIntersectionObserver';

const CardSlider = ({ data, linkToFullText }) => {
    const [truncateLength, setTruncateLength] = useState(window.innerWidth > 768 ? 600: 300)
    const [hasAnimated, setHasAnimated] = useState(false);
    const [arrowDisplayed, setArrowDisplayed] = useState(false);
    const carouselRef = useRef(null);
    const isCarouselVisible = useIntersectionObserver(carouselRef)

    useEffect(() => {
        if (isCarouselVisible && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isCarouselVisible, hasAnimated]);

    useEffect(() => {
        if (hasAnimated) {
            const timer = setTimeout(() => {
                setArrowDisplayed(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [hasAnimated]); 

    useEffect(() => {
        const handleResize= () => {
            if (window.innerWidth > 1024){
                setTruncateLength(600)
            }else if(window.innerWidth > 768){
                setTruncateLength(450)
            }else{
                setTruncateLength(300)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])

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

    const truncateDescription = (description, maxLength = truncateLength) => {
        return description.length > maxLength ? description.substring(0, maxLength) + "..." : description + "...";
    }
    

return (
    <div className="animation-container">
        <div ref={carouselRef} className={`carousel-container ${hasAnimated ? 'slide-in' : ''}`}>
            { hasAnimated && <Carousel 
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container "
                arrows={arrowDisplayed}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                partialVisible={true}
            >
                {data.map((item, index) => (
                <Card key={index} sx={{ minWidth: 200, height: '80vh', margin: '15px 10px', boxShadow: 5 ,  borderRadius: '16px'}}>
                    {item.image && (
                    <CardMedia
                    component="img"
                    sx={{ height: '40%', width: '100%', pointerEvents: 'none' }}
                    image={item.image}
                    alt={item.title}
                    />)
                    }
                    <CardContent>
                    <Typography variant="h5" component="div">
                        {item.title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {item.subtitle}
                    </Typography>
                    <Typography 
                    // variant="body1" 
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }, 
                        margin: { xs: '20px 5px', sm: '20px 5px', md: '20px 25px'}, 
                        textAlign: 'left'
                    }}
                    >
                        {!linkToFullText ? item.description : truncateDescription(item.description)}
                        {linkToFullText  && (
                        <a href="https://www.google.co.uk/"target="_blank" style={{ textDecoration: 'underline'}}>
                            read this blog
                        </a>
                        )}
                    </Typography>
                    
                    </CardContent>
                </Card>
                ))}
            </Carousel>
            }
        </div>
    </div>
);
};

export default CardSlider;
