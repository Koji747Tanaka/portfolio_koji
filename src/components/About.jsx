import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import styles from './Home.module.css';
const AboutComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} {...props} className={styles.about}>
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
            <h1>About page.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Mollitia expedita adipisci harum ut impedit, officiis unde, 
                veniam, aperiam reiciendis distinctio nesciunt. 
                Minima est tempore dolor iusto sequi assumenda quaerat ex.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Mollitia expedita adipisci harum ut impedit, officiis unde, 
            veniam, aperiam reiciendis distinctio nesciunt. 
            Minima est tempore dolor iusto sequi assumenda quaerat ex.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Mollitia expedita adipisci harum ut impedit, officiis unde, 
            veniam, aperiam reiciendis distinctio nesciunt. 
            Minima est tempore dolor iusto sequi assumenda quaerat ex.</p>
        </Box>
    </div>
)
});

export default AboutComponent
