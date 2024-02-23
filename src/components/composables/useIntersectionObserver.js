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

export default useIntersectionObserver;
