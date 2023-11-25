import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';
// import skillContents from '../../contents/skillContent';
import styles from './HorizontalBarChartStyles.module.css'
import React, {forwardRef, useState, useEffect, useRef } from 'react';

const customTickFormatter = (value) => {
    const labelMap = {
        33: 'Amateur',
        66: 'Proficient',
        100: 'Expert'
    };
    return labelMap[value] || '';
};

const HorizontalBarChart = forwardRef((props, ref) => {
    const [animate, setAnimate] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            });
        }, { threshold: 0.6 }); // Adjust threshold as needed

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => {
            if (chartRef.current) {
                observer.unobserve(chartRef.current);
            }
        };
    }, []);

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
                        <XAxis type="number" dataKey="value" tickFormatter={customTickFormatter} ticks={[33, 66, 100]}/>
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
