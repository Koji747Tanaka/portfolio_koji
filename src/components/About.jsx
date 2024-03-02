import { forwardRef, useRef, } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './About.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Programming from './About/Programming'
import useIntersectionObserver from './composables/useIntersectionObserver';

const AboutComponent = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);
return (
    <div ref={ref} className={`${styles.about}`}>
        <Box
            sx={{
            pt: { xs: 5, md: 10 },
            px: { xs: 5, md: 10 },
            pb: { xs: 5, md: 5 }, 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
                textAlign: 'center',
            },
            }}
        >
            
            <h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>About Me</h1>
            <div className={`${styles.paragraph}`}>
                <p>I am pursuing a Master's degree in Artificial Intelligence at Monash University and concurrently working as a junior software engineer.</p>
                <p>Through online certifications and university coursework, I've gained substantial expertise in neural networks, which I've applied to my engineering projects.</p>
                <p>I'm passionate about leveraging my skills to contribute to innovative projects and tackle complex problems. I'm constantly seeking to expand my knowledge in software engineering and machine learning.</p>
                <p>I'm on the lookout for new opportunities in Australia and would welcome a discussion about how I can meet your organisation's needs.</p>
            </div>
            <div className={styles.connect}>
            <Button 
            variant="contained"
            href="https://www.linkedin.com/in/koji-tanaka-95a92a265/"
            target="_blank"
            startIcon={<LinkedInIcon style={{ fontSize: 30 }} />}
            sx={{
                backgroundColor: '#0072b1', 
                color: '#fff',
                padding: '6px 16px',
                textTransform: 'none',
                '&:hover': {
                backgroundColor: '#005691',
                },
            }}
            >
                Connect on Linkedin
            </Button>
            </div>
        </Box>
        <Programming/>
    </div>
)
});

export default AboutComponent
