import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ end, prefix = '', suffix = '', decimal = false, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const startVal = 0;
    const endVal = parseFloat(end);

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (endVal - startVal) * eased;

      setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, end, duration, decimal]);

  return (
    <span ref={ref} className={className}>
      {prefix}{decimal ? count.toFixed(1) : count.toLocaleString('en-IN')}{suffix}
    </span>
  );
};
