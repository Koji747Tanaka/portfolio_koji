import { forwardRef, useRef} from 'react';
import CardSlider from '../composables/CardSlider';
import styles from './Blog.module.css';
import blogContents from '../../contents/blogContent'
import { Box } from '@mui/material';
import useIntersectionObserver from '../composables/useIntersectionObserver';

const BlogComponent = forwardRef((props, ref) => {
    const h1Ref = useRef(null);
    const isH1Visible = useIntersectionObserver(h1Ref);
return (
    <div ref={ref} className={`${styles.background}`}>
        <Box
            sx={{
            pt: { xs: 0, md: 5 },
            pb: { xs: 0, md: 5 }, 
            }}
        >
            
            <h1 ref={h1Ref} className={isH1Visible ? 'fadeInUp' : ''}>Blogs</h1>
        </Box>
        <CardSlider data={blogContents} linkToFullText={true}/>
    </div>
)
});

export default BlogComponent
