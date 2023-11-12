import Box from '@mui/material/Box';
import { forwardRef } from 'react';
import './Home.css';
const HomeComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} {...props} className="background">
        <Box
            sx={{
            p: 5,
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
                pr: 20,
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
    </div>
)
});

export default HomeComponent
