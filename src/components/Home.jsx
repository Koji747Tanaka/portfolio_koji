import Box from '@mui/material/Box';
import { forwardRef } from 'react';
import styles from './Home.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HomeComponent = forwardRef((props, ref) => {
const fadeInOutKeyframes = `
@keyframes fadeInOut {
0%, 100% {
opacity: 0;
}
50% {
opacity: 1;
}
}
`;
return (
    <div ref={ref} {...props} className={`${styles.background} ${styles.home}`}>
        <style>{fadeInOutKeyframes}</style>
        <Box sx={{ 
        position: 'relative', 
        height: '100vh',
        mr:{xs: 3, md: 15}
        }}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                height: '100%', 
                '& > *': {
                    marginBottom: '2px',
                    marginTop: '2px',
                    textAlign: 'right',
                },
                '& > h1': {
                    fontSize: '3rem', 
                },
                '& > p': {
                    fontSize: '1.0rem'
                },
                '@media screen and (min-width: 600px)': {
                    '& > h1': {
                        fontSize: '6rem', 
                    },
                    '& > p': {
                        fontSize: '2.0rem'
                    },
                }
                }}
            >
            <p>Hi there, my name is</p>
            <h1>KOJI</h1>
            <h1>TANAKA</h1>
            <p>and I leverage Technology to achive </p>
            </Box>

            <KeyboardArrowDownIcon 
            className={`${styles.home.keyArrowDown}`}
            sx={{ 
                position: 'absolute',
                bottom: 0, 
                right: '0%', 
                transform: 'translateX(20%)', 
                fontSize: { xs: 150, md: 300 },
                color: '#fff',
                animation: 'fadeInOut 3s infinite',
            }} 
            />
        </Box>
    </div>
)
});

export default HomeComponent
