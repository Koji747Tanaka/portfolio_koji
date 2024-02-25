import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import styles from './Programming.module.css';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const BrainComponent = forwardRef((props, ref) => {
    const boxRef = useRef(null);
    const isBoxesVisible = useIntersectionObserver(boxRef);

    const imageProperty = {
        height: {
            xs: '100px',
            sm: '100px',
            md: '150px', 
          }, 
        aspectRatio: '1 / 1',
        maxHeight: { xs: 233, md: 167 }, 
        maxWidth: { xs: 350, md: 250 }, 
        margin: 'auto',
    }

    const images = [
        { id: 1, alt:'python-logo', src:'images/python-logo.png' },
        { id: 2, alt:'js-logo', src:'images/js-logo.png' },
        { id: 3, alt:'ruby-logo', src:'images/ruby-logo.png' },
        { id: 4, alt:'posgre-logo', src:'images/posgre-logo.png' },
    ];

return (
    <div className={`${styles.background}`}>
         <Box ref={boxRef} sx={{
            display: 'grid',
            gridTemplateColumns: { 
                xs: 'repeat(auto-fit, 40%)', 
                sm: 'repeat(auto-fit, 20%)', 
            },
            justifyContent: 'center',
            gap: {
                xs: 2,
                sm: 4,
                md: 3, 
                lg: 5
              },
            maxWidth: { sm: '90%',  md: '90%', lg: '90%'  }, 
            margin: 'auto'
        }}
        >
        
        { images.map((image) => (

            <Box 
            key={image.id}
            component="img"
            sx={imageProperty}
            alt={image.alt}
            src={image.src}
            />
            ))
        }
        </Box>
 
        

        

    </div>
)
});

export default BrainComponent
