import { forwardRef, useRef, } from 'react';
import Button from '@mui/material/Button';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedInButton = (() => {
return (
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

)
});

export default LinkedInButton
