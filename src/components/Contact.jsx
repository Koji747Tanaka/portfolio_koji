import { forwardRef, useRef} from 'react';
import styles from './Contact.module.css';
import { Box, Tabs, Tab } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
// import useIntersectionObserver from '../composables/useIntersectionObserver';

const ContactComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} className={`${styles.background}`}>
        <Box
            sx={{
            pt: { xs: 0, md: 5 },
            pb: { xs: 0, md: 5 }, 
            }}
        >
        <Card key={1} sx={{ minWidth: 200, height: '65vh', margin: '0 10px', boxShadow: 3 }}>
            <CardContent>
            <Typography variant="h5" component="div">
                {/* {item.title} */}
            </Typography>
            <Typography variant="body2">
                {/* {item.description} */}
            </Typography>
            </CardContent>
        </Card>

        </Box>
    </div>
)
});

export default ContactComponent;