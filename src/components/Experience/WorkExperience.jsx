import { forwardRef, useRef } from 'react';
import styles from './WorkExperience.module.css';
import blogContents from '../../contents/blogContent'
import CardSlider from '../composables/CardSlider';
import Box from '@mui/material/Box';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const WorkExperienceComponent = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);
return (
    <div ref={ref} className={`${styles.background}`}>
        <Box
            sx={{
            pt: { xs: 0, md: 5 },
            pb: { xs: 0, md: 5 }, 
            }}
        >
            <h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>Experience & Education</h1>
        </Box>
        <CardSlider data={blogContents} />
    </div>
)
});

export default WorkExperienceComponent;



