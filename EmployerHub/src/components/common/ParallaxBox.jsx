import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const ParallaxBox = ({
  children,
  speed = 0.2,
  className = '',
  style = {}
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  if (shouldReduceMotion) {
    return <div className={className} style={style}>{children}</div>;
  }

  const isPositioned = className.includes('absolute') || className.includes('fixed');
  const baseClass = isPositioned ? className : `relative ${className}`;

  return (
    <div ref={ref} className={baseClass} style={style}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};
