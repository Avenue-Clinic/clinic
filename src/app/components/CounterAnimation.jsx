"use client";

import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const CounterAnimation = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end_num = parseInt(end);
      const increment = end_num / (duration * 60);
      const handle = setInterval(() => {
        start += increment;
        if (start >= end_num) {
          setCount(end_num);
          clearInterval(handle);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(handle);
    }
  }, [end, duration, inView]);

  return <div ref={ref}>{count ? `${prefix}${count}${suffix}` : '0'}</div>;
};

export default CounterAnimation;
