import { forwardRef } from 'react';
import WorkExp from './Experience/WorkExperience.jsx';
import Blog from './Experience/Blog.jsx'
import Skill from './Experience/Skill.jsx'
import styles from './Experience.module.css';
import { Box, Tabs, Tab, AppBar } from '@mui/material';

const ExperienceComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} className={`${styles.base}`}>
        <Box
            sx={{
            p: 3,
            pt: { xs: 5, md: 10 },
            mb: { xs: 5, md: 10 }, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
                textAlign: 'center',
            },
            }}
        >
            <h1>Experience</h1>
        </Box>
        <Blog/>
        <Skill/>
        <WorkExp></WorkExp>
    </div>
)
});

export default ExperienceComponent
