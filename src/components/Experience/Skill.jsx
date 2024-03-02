import { forwardRef,  useState, useRef} from 'react';
import styles from './Skill.module.css'
import HorizontalBarChart from '../composables/HorizontalBarChart';
import { Box, Tabs, Tab } from '@mui/material';
import  {frontSkillContents, backendMlSkillContents, cloudSkillContents} from '../../contents/skillContent';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const SkillComponent = forwardRef((props, ref) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);

return (
    <div ref={ref} className={`${styles.background}`} variant="fullWidth">
        <Box
            sx={{
            pt: { xs: 0, md: 10 }, 
            }}
        >
            <h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>Skills</h1>
        </Box>

        <Tabs value={selectedTab} variant="fullWidth" onChange={handleTabChange}
            sx={{
            width: { xs: '90%', sm: '80%', md: '50%' },
            '.MuiTab-root': {
                flexGrow: 1,
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
