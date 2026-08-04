import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const StaggerContainer = ({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.15,
  className = '',
  style = {}
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  direction = 'up', // 'up' | 'scale' | 'fade' | 'right' | 'left'
  distance = 25,
  className = '',
  style = {}
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const getVariants = () => {
    switch (direction) {
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4 } }
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } }
        };
    }
  };

  return (
    <motion.div variants={getVariants()} className={className} style={style}>
      {children}
    </motion.div>
  );
};
