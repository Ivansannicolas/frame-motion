import React from 'react';
import {motion} from 'framer-motion';

export default function MotionDiv({ hover, animate, onClick, children }) {
  return (
    <motion.div
      className="countBox"
      whileHover={hover}
      animate={animate}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}