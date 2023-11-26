import { forwardRef, useRef} from 'react';
import styles from './CareerAspirations.module.css';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const BlogComponent = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);
return (
    <div ref={ref} className={`${styles.background} ${styles.about}`}>
        <Box
            sx={{
            pt: { xs: 0, md: 5 },
            pb: { xs: 0, md: 5 }, 
            }}
        ><h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>Career Aspirations</h1>
        </Box>
        <Box>
            <div >
                <p>Balancing my AI studies at university with a role as a Full-stack Software Engineer at an IT company, I am on a vibrant journey at the crossroads of technology and innovation. 
                    My professional path is fueled by a enthusiasm for AI and an insatiable curiosity for all facets of software technology. </p>
                <p>One of the things I love most about my work is the opportunity to collaborate with people from various backgrounds. 
                    It's in these dynamic interactions that I find new ideas spark and innovation thrives. 
                    My aspiration is to continue this path of learning and growth, immersing myself further in AI and software development, 
                    and continually bringing fresh insights to the table.</p>
                <p>Looking ahead, I am eager to deepen my technical knowledge and expertise. My goal is to align with a company where growth is the place where I can expand my skills and contribute meaningfully. I am particularly drawn to organizations that are not just in the business of technology but are committed to using tech for real, positive impact. 
                    In such an environment, I believe my productivity, creativity, and sense of responsibility will reach new heights.</p>
                <p>My journey in tech is driven by a love for innovation and the endless possibilities it presents. I am always excited about the prospect of collaborating with new people, sharing knowledge, and learning from their experiences. It's through these partnerships that I look forward to contributing to meaningful projects</p>
            </div>
        </Box>
    </div>
)
});

export default BlogComponent
