import Box from '@mui/material/Box';
import { forwardRef, useState, useEffect } from 'react';
import styles from './Home.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HomeComponent = forwardRef((props, ref) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textStyle = {
    opacity: 1 - scrollPosition / 500,
    transform: `translateY(${scrollPosition * 0.5}px)`
    };


    
      

    const fadeInOutKeyframes = 
    `
    @keyframes fadeInOut {
    0%, 100% {
    opacity: 0;
    }
    50% {
    opacity: 1;
    }
    }
    `;

return (
    <div ref={ref} className={`${styles.background} ${styles.home}`}>
        <style>{fadeInOutKeyframes}</style>
        <img src="images/koji.webp" className={`${styles.foregroundImageStyles}`} alt="Person" />


        <Box sx={{ 
        position: 'relative', 
        height: '100vh',
        mr:{xs: 3, md: 15},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        // overflow: 'hidden',
        }}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                height: '100%', 
                width: { xs: '60%', sm: '60%', md: '35%' }, 
                '& > *': {
                    marginBottom: '2px',
                    marginTop: '2px',
                    textAlign: 'right',
                },
                '& > h1': {
                    fontSize: '3rem', 
                },
                '& > p': {
                    fontSize: '1.0rem'
                },
                '@media screen and (min-width: 600px)': {
                    '& > h1': {
                        fontSize: '6rem', 
                    },
                    '& > p': {
                        fontSize: '2.0rem'
                    },
                }
                }}
            >
            <p style={{...textStyle, color: '#13acd6'}}>Hi there, my name is</p>
            <h1 style={textStyle}>KOJI</h1>
            <h1 style={textStyle}>TANAKA</h1>
            <p style={textStyle}>and I'd love to write <span style={{color: '#13acd6'}}>code that grow</span> with a company.</p>
            </Box>

            <KeyboardArrowDownIcon 
            className={`${styles.home.keyArrowDown}`}
            sx={{ 
                position: 'absolute',
                bottom: 0, 
                right: '0%', 
                transform: 'translateX(20%)', 
                fontSize: { xs: 150, md: 300 },
                color: '#fff',
                animation: 'fadeInOut 3s infinite',
            }} 
            onClick={props.scrollToAbout}
            />
        </Box>
        
    </div>
)
});

export default HomeComponent
