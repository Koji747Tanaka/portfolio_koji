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
    
    const [maxHeight, setMaxHeight] = useState('auto');
    const cardRefs = useRef(data.map(() => React.createRef()));

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

    useEffect(() => {
        window.addEventListener('load', updateMaxHeight);
        return () => {
          window.removeEventListener('load', updateMaxHeight);
        };
      }, []);

    const updateMaxHeight = () => {
        const maxCardHeight = cardRefs.current.reduce((max, cardRef) => {
          const currentHeight = cardRef.current ? cardRef.current.offsetHeight : 0;
          return Math.max(max, currentHeight);
        }, 0);
        setMaxHeight(`${maxCardHeight}px`);
      };
    

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
            <Carousel 
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                arrows={arrowDisplayed}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                partialVisible={true}
            >
                {data.map((item, index) => (
                <Card 
                key={index} 
                ref={cardRefs.current[index]}
                sx={
                    { 
                        minWidth: 200, 
                        margin: '10px 10px',
                        boxShadow: 5 ,  
                        borderRadius: '16px',
                        height: maxHeight
                    }
                    }>
                    {item.image && (
                    <CardMedia
                    component="img"
                    sx={{ height: { xs: '200px', sm: '250px', md: '300px' },
                    width: '100%', 
                    pointerEvents: 'none' }}
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
                    component="div"
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }, 
                        margin: { xs: '20px 5px', sm: '30px 5px', md: '20px 25px'}, 
                        textAlign: 'left'
                    }}
                    >
                         {item.bullets && item.bullets.length > 0 && (
                            <ul className='no-bullets bottom-space'>
                                {item.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        )}
                        
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
        </div>
    </div>
);
};

export default CardSlider;
