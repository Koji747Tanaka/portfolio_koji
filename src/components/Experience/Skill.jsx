import { forwardRef,  useState} from 'react';
import styles from './Skill.module.css'
import HorizontalBarChart from '../composables/HorizontalBarChart';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import  {frontSkillContents, backendMlSkillContents, cloudSkillContents} from '../../contents/skillContent';

const SkillComponent = forwardRef((props, ref) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
return (
    <div ref={ref} className={`${styles.background}`} variant="fullWidth">
        <h1>Skills</h1>
        {/* <Tabs value={section} onChange={scrollThrough} variant="fullWidth" */}
        <Tabs  value={selectedTab}  variant="fullWidth" onChange={handleTabChange}
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
        {selectedTab ===0 && <HorizontalBarChart skillContents = {frontSkillContents}/>}
        {selectedTab ===1 && <HorizontalBarChart skillContents = {backendMlSkillContents}/>}
        {selectedTab ===2 && <HorizontalBarChart skillContents = {cloudSkillContents}/>}

    </div>
)
});

export default SkillComponent;
