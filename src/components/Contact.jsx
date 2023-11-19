import { forwardRef } from 'react';
import styles from './Contact.module.css';

const ContactComponent = forwardRef((props, ref) => {
return (
    <div ref={ref} {...props} className={`${styles.contact}`}>

    </div>
)
});

export default ContactComponent
