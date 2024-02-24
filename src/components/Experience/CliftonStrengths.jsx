import { forwardRef, useRef} from 'react';
import styles from './CliftonStrengths.module.css';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const CliftonStrengths = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);

    const square = { 
        xs: '40vw', 
        sm: '30vw', 
        md: '25vw', 
        lg: '15vw' 
    }
    const commonBoxStyle = {
        width: square,
        height: square,
        color: 'white',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

    const boxes = [
    { id: 1, color: 'green', strength: 'Analytical' },
    { id: 2, color: 'purple', strength: 'Consistency' },
    { id: 3, color: 'blue', strength: 'Empathy' },
    { id: 4, color: 'purple', strength: 'Discipline' },
    { id: 5, color: 'blue', strength: 'Includer' },
    { id: 6, color: 'orange', strength: 'communication' },
    ];

return (
    <div ref={ref} className={`${styles.background} ${styles.center}`}>
        <Box
            sx={{
            pt: { xs: 0, md: 5 },
            pb: { xs: 0, md: 5 }, 
            }}
        >
            <h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>Clifton Strengths</h1>
        </Box>
        
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gridTemplateRows: { xs: 'repeat(3, auto)', md: 'repeat(2, auto)' },
            gap: {
                xs: 2,
                sm: 2,
                md: 3, 
                lg: 5
              },
            width: {
                xs: 'calc(100% - 16px)', // For phones
                sm: 'calc(100% - 32px)', // For tablets (including iPads in portrait)
                md: 'calc(100% - 48px)', // For landscape tablets/small desktops, adjust as necessary
                lg: 'calc(100% - 64px)' // For larger desktops, adjust as necessary
              },
            maxWidth: 'lg', 
            mx: 'auto', 
        }}
        >
            { boxes.map((box) => (
                <Box 
                key={box.id}
                sx={{
                    ...commonBoxStyle,
                    backgroundColor: box.color
                }}
                >
                    {box.strength}
                </Box>
            ))
            }
        </Box>
    </div>
)
});

export default CliftonStrengths
