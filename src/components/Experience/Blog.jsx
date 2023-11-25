import { forwardRef } from 'react';
import CardSlider from '../composables/CardSlider';
import styles from './Blog.module.css';
import blogContents from '../../contents/blogContent'

const BlogComponent = forwardRef((props, ref) => {
    
return (
    <div ref={ref} className={`${styles.background}`}>
        <CardSlider data={blogContents} />
    </div>
)
});

export default BlogComponent
