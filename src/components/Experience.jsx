import { forwardRef } from 'react';
import WorkExp from './Experience/WorkExperience.jsx';
import Blog from './Experience/Blog.jsx'
import Skill from './Experience/Skill.jsx'
import CliftonStrengths from './Experience/CliftonStrengths.jsx'
import styles from './Experience.module.css';
import { Box, Tabs, Tab, AppBar } from '@mui/material';

const ExperienceComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} className={`${styles.base}`}>
        <WorkExp/>
        <Skill/>
        <Blog/>
        <CliftonStrengths/>
    </div>
)
});

export default ExperienceComponent
