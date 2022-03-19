import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import './App.css';

const animationObject = { rotate: 0 }

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [counterAnimation, setCounterAnimation] = useState(animationObject)
  const [textAnimation, setTextAnimation] = useState(animationObject)

  const openModal = () => {
    setIsModalOpen(true);
    setCounterAnimation({
      ...counterAnimation,
      width: '100%',
      height: '100%',
      zIndex: 1000,
      position: 'absolute'
    })
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setCounterAnimation({
      ...counterAnimation,
      width: '200px',
      height: '200px',
      zIndex: 'unset',
      position: 'unset'
    })
  }

  const handleClickCounter = () => {
    if (isModalOpen) closeModal();
    else openModal();
  }

  const addCount = () => {
    setCount(count + 1);
    setCounterAnimation({ ...counterAnimation, rotate: counterAnimation.rotate + 45 })
    setTextAnimation({ ...textAnimation, rotate: textAnimation.rotate - 45 })
  }

  const substractCount = () => {
    setCount(count - 1);
    setCounterAnimation({ ...counterAnimation, rotate: counterAnimation.rotate - 45 })
    setTextAnimation({ ...textAnimation, rotate: textAnimation.rotate + 45 })
  }

  return (
    <div className="App">
      <motion.div
        className="countBox"
        whileHover={{ scale: 1 }}
        animate={counterAnimation}
        // onClick={handleClickCounter}
        drag
        dragMomentum={false}
        dragConstraints={{
          top: -100,
          left: -100,
          bottom: 100,
          right: 100,
        }}
      >
        <motion.span animate={textAnimation}>
          {count}
        </motion.span>
      </motion.div>
      <section className="buttonSection">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          onClick={substractCount}
        >
          Substract
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          onClick={addCount}
        >
          Add
        </motion.button>
      </section>
    </div>
  );
}

export default App;
