import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const ParallaxBox = ({
  children,
  offset = 50, // pixel depth movement
  direction = 'vertical', // 'vertical' | 'horizontal'
  className = '',
  style = {}
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    [-offset, offset]
  );

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  const motionStyle = direction === 'horizontal'
    ? { x: transformValue, ...style }
    : { y: transformValue, ...style };

  return (
    <motion.div ref={ref} style={motionStyle} className={className}>
      {children}
    </motion.div>
  );
};
