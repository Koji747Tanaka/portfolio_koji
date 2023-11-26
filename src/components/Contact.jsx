import { forwardRef, useRef} from 'react';
import styles from './Contact.module.css';
import { Box, Tabs, Tab } from '@mui/material';
import { Card, CardContent, CardHeader, Avatar } from '@mui/material';
import useIntersectionObserver from './composables/useIntersectionObserver';
import LinkedInButton from './composables/LinkedInButton.jsx'

const ContactComponent = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);
return (
    <div ref={ref} className={`${styles.background}`}>
        <Box
            sx={{
            pt: { xs: 0, md: 5 },
            pb: { xs: 0, md: 5 }, 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        ><h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>Let's Connect!</h1>
        </Box>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
                textAlign: 'center',
            },
            }}
        >
            <Card sx={{ 
                position: 'relative', 
                minWidth: 200, 
                mt: {xs: 10, md: 5},
                width: { xs: '80%', sm: '60%', md: '50%', lg: '30%' },
                boxShadow: 3,
                textAlign: 'center',
                overflow: 'visible', 
            }}>
                <CardHeader
                avatar={
                    <Avatar 
                        alt="Koji's picture" 
                        src="myImage.jpg"
                        sx={{ 
                        width: 80, 
                        height: 80,  
                        position: 'absolute', 
                        top: -40, 
                        left: 'calc(50% - 40px)', 
                        border: '2px solid white', 
                        boxShadow: 3, 
                        }}
                    />
                }
            />
                <CardContent sx=
                {{
                    pt: { xs: 3, md: 5 },
                    pb: { xs: 3, md: 5 }, 
                    '& > h2': {
                        pb: 3,
                        fontSize: {
                            xs: '1.5rem',  
                            md: '2rem', 
                        },
                    },
                    '& > p':{
                        p:1,
                        fontSize: {
                            xs: '1rem',  
                            md: '1.5rem', 
                        },
                    }
                    ,
                    '& > div':{
                        pt:5
                    }
                }}>
                    <h2>Koji Tanaka</h2>
                    <p>Thank you for visiting my website.</p>
                    <p>Feel free to send a request on LinkedIn!</p>
                    <div>
                        <LinkedInButton/>
                    </div>
                </CardContent>
            </Card>

        </Box>
    </div>
)
});

export default ContactComponent;