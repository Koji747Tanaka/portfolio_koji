import { forwardRef } from 'react';
import WorkExp from './Experience/WorkExperience.jsx';
import Blog from './Experience/Blog.jsx'
import styles from './Experience.module.css';

const ExperienceComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} className={`${styles.base}`}>
        <h1>Experience</h1>
        <Blog/>
        <WorkExp></WorkExp>
    </div>
)
});

export default ExperienceComponent
