import { forwardRef,  useState} from 'react';
import styles from './Skill.module.css'
import HorizontalBarChart from '../composables/HorizontalBarChart';
import { Box, Tabs, Tab, AppBar } from '@mui/material';

const SkillComponent = forwardRef((props, ref) => {
    const [section, setSection] = useState(0);
return (
    <div ref={ref} className={`${styles.background}`} variant="fullWidth">
        <h1>Skills</h1>
        {/* <Tabs value={section} onChange={scrollThrough} variant="fullWidth" */}
        <Tabs  value={section}  variant="fullWidth"
            sx={{
            width: { xs: '90%', sm: '80%', md: '50%' },
            '.MuiTab-root': {
                flexGrow: 1,
                fontSize: '1.2rem',
                color: '#08090f',
                textTransform: 'none', 
                height:20, 
                fontSize: {
                xs: '0.8rem', 
                sm: '0.9rem', 
                md: '1rem', 
                },
            },
            '.MuiTabs-indicator': {
                backgroundColor: '#13acd6',
                height: '3px',
            },

            }}>
                <Tab label="Front"/>
                <Tab label="Back & ML" />
                <Tab label="Cloud" />
            </Tabs>
        <HorizontalBarChart/>
    </div>
)
});

export default SkillComponent;
