import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import styles from './Brain.module.css';

const BrainComponent = forwardRef((props, ref) => {
return (
    <div className={`${styles.brain}`}>
        <Box style={{ height: '50vh', backgroundColor: 'blue' }}>Brain picture</Box>
    </div>
)
});

export default BrainComponent
