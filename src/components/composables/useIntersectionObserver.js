import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, options = { threshold: 0.01 }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsIntersecting(entry.isIntersecting);
            });
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};

export const useVisibilityChange = (ref, options = { threshold: 0.01 }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [visibilityState, setVisibilityState] = useState('invisible'); // 'visible' or 'invisible'

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const isVisible = entry.isIntersecting;
                setIsIntersecting(isVisible);
                setVisibilityState(isVisible ? 'visible' : 'invisible');
            });
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options.threshold]); // React to changes in the threshold if needed

    // Return both the original isIntersecting state and the new visibilityState
    return { isIntersecting, visibilityState };
};

export default useIntersectionObserver;
