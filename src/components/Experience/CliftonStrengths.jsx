import { forwardRef, useRef, useEffect, useState} from 'react';
import styles from './CliftonStrengths.module.css';
import { Box } from '@mui/material';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const CliftonStrengths = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const boxRef = useRef(null);
    // const isAnimated = useState(false);

    const isH1Visible = useIntersectionObserver(h1Ref);
    const isBoxesVisible = useIntersectionObserver(boxRef);

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
        borderRadius: '7%',
        opacity: 0,
      };

    const boxes = [
        { id: 1, color: '#05a65b', strength: 'Analytical', setOut: 0, direction: 'left' },
        { id: 2, color: '#cc0e31', strength: 'Consistency', setOut: 500, direction: 'down' },
        { id: 3, color: '#6280c4', strength: 'Empathy', setOut: 1000, direction: 'right' },
        { id: 4, color: '#cc0e31', strength: 'Discipline', setOut: 1500, direction: 'down' },
        { id: 5, color: '#6280c4', strength: 'Includer', setOut: 2000, direction: 'left' },
        { id: 6, color: '#edb409', strength: 'communication', setOut: 2500, direction: 'right' },
    ];

    const getDirectionClassName = (visibilityState, otherCondition) => {
        if (visibilityState && otherCondition === 'down') return `${styles.fadeInDown}`;
        if (visibilityState && otherCondition === 'right') return `${styles.fadeInRight}`;
        if (visibilityState && otherCondition === 'left') return `${styles.fadeInLeft}`;
      };


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
        
        <Box ref={boxRef} sx={{
            display: 'grid',
            gridTemplateColumns: { 
                xs: 'repeat(auto-fit, 40%)', 
                sm: 'repeat(auto-fit, 30%)', 
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
                    backgroundColor: box.color,
                    fontSize: {
                        xs: '1rem',
                        sm: '1.25rem',
                        md: '1.5rem', 
                      },
                }}
                style={{ animationDelay: `${box.setOut}ms` }} 
                className={getDirectionClassName(isBoxesVisible, box.direction)}
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
