import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './About.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Brain from './About/Brain'

const AboutComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} className={`${styles.about}`}>
        <Box
            sx={{
            p: 3,
            mt: { xs: 5, md: 10 },
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
            
            <h1>About Me</h1>
            <div className='aboutMe'>
                <p>I am currently studying for my Master's degree in Artificial Intelligence 
                    at Monash University while doing an internship as a software engineer. </p>
                <p>Before commencing my studies at Monash University, 
                    I obtained a Bachelor of Engineering degree from Chiba University and 
                    a Diploma of Software Development from South Metropolitan TAFE. 
                    My primary area of study during my undergraduate studies was the development of software. 
                    However, I acquired valuable expertise in neural networks through online certifications, 
                    which I was able to apply to a project that I worked on as an intern software engineer.</p>
                <p>I have a passion for applying my knowledge and abilities to contribute to cutting-edge projects 
                    and resolve challenging issues. I'm always looking for ways to broaden my knowledge 
                    in the field of software engineering and Machine Learning.</p>
                <p>I am currently seeking new opportunities in Australia. Let's set up a call to talk about your organisation's needs.</p>
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
        <Brain/>
    </div>
)
});

export default AboutComponent
