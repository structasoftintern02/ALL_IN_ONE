import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2, // in seconds
  prefix = '',
  suffix = '',
  formatter = (val) => Math.floor(val).toLocaleString(),
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? to : from);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out quad formula for smooth decelerating count effect
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentVal = from + (to - from) * easeOutQuad;
      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter(count)}
      {suffix}
    </span>
  );
};
