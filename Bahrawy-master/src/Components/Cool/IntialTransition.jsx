import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  
  const textContainer = {
    initial: {
      opacity: 1,
      zIndex: -1,
    },
    animate: {
        opacity: 0,
     
      transition: {
          when: "afterChildren",
        duration: 0.3,
      },

    },
  };
  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 92,
      
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  function IntialTransition({Title}) {
    const [loading, setLoading] = useState(true);
  return (
    <>
    <motion.section className="absolute inset-0 flex align-center justify-center"  exit={{opacity:0}}>
        <motion.div
                        className="absolute z-50 flex blackBox items-center justify-center w-full bgDark"
                        initial="initial"
                        animate="animate"
                        variants={blackBox}
                        onAnimationStart={() => document.body.classList.add("overflow-hidden","h100")}
                      
                      
                        onAnimationComplete={() =>{
                        document.body.classList.remove("overflow-hidden","h100");
                        setLoading(false);
                      }

              }               
    
    >

{
    loading?       <motion.svg variants={textContainer} className="absolute blackBox z-50 flex">
    <pattern
      id="pattern"
      patternUnits="userSpaceOnUse"
      width={750}
      height={800}
      className="colorPink"
    >
      <rect className="w-full h-full fill-current" />
      <motion.rect
          variants={text}
          className="w-full h-full text-gray-600 fill-current"
      />
    </pattern>
    <text
    className="text-4xl font-bold"
    textAnchor="middle"
    x="50%"
    y="50%"
    style={{ fill: "url(#pattern)" }}
  >
    {Title}
  </text>

  </motion.svg> : null
}
        </motion.div>

    </motion.section>

    </>
  )
}

export default IntialTransition