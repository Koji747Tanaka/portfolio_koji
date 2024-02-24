import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';
import styles from './HorizontalBarChartStyles.module.css'
import React, {forwardRef, useState, useEffect, useRef } from 'react';
import useIntersectionObserver from './useIntersectionObserver';


const customTickFormatter = (value) => {
    const labelMap = {
        33: 'Amateur',
        85: 'Proficient',
        100: 'Expert'
    };
    return labelMap[value] || '';
};

const HorizontalBarChart = forwardRef((props, ref) => {
    const chartRef = useRef(null);
    const animate = useIntersectionObserver(chartRef)
    return (
        <div ref={chartRef} className={`${styles.container}`}>
            {animate && (
                <ResponsiveContainer >
                    <BarChart
                    data={props.skillContents}
                    layout="vertical"
                    margin={{ top: 30, right: 20, left: 20, bottom: 100 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" dataKey="value" tickFormatter={customTickFormatter} ticks={[33, 85, 100]}/>
                        <YAxis type="category" dataKey="name" hide/>
                        {/* <Tooltip /> */}
                        {/* <Legend /> */}
                        <Bar dataKey="value" fill="#13acd6" barSize={40} isAnimationActive={animate} animationDuration={1000} >
                            <LabelList dataKey="name" position="inside" style={{ fill: 'white' }} className={`${styles.fadeIn}`} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
        )}
        </div>
    );
})

export default HorizontalBarChart;
