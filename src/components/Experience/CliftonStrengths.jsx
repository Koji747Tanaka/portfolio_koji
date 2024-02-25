import { forwardRef, useRef} from 'react';
import styles from './CliftonStrengths.module.css';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const CliftonStrengths = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);

    const square = { 
        xs: '100%', 
        sm: '100%', 
        md: '100%', 
        lg: '100%' 
    }
    const commonBoxStyle = {
        width: square,
        aspectRatio: '1 / 1',
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
            gridTemplateColumns: { 
                xs: 'repeat(auto-fit, 40%)', 
                sm: 'repeat(auto-fit, 30%)', 
                md: 'repeat(auto-fit, 30%)', 
                lg: 'repeat(auto-fit, 30%)' 
            },
            justifyContent: 'center',
            gap: {
                xs: 2,
                sm: 4,
                md: 3, 
                lg: 5
              },
            maxWidth: { sm: '90%',  md: '90%', lg: '60%'  }, 
            margin: 'auto'
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
