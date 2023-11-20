import { forwardRef } from 'react';
import styles from './Experience.module.css';

const ExperienceComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} className={`${styles.experience}`}>

    </div>
)
});

export default ExperienceComponent
