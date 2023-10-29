import React, { createContext, useEffect, useState } from 'react'
import {motion , useMotionValue , useSpring} from 'framer-motion'
function StickyCursor({scale}) {

  const mouse ={
    x:useMotionValue(0),
    y:useMotionValue(0),
  }
  const smoothMouse={
    x:useSpring(mouse.x,{stiffness:300,damping:15}),
    y:useSpring(mouse.y,{stiffness:300,damping:15}),
  }

const CursorSize =23
  const manageMouseMove = (e)=>{
    const {clientX,clientY}=e;

    mouse.x.set(clientX-CursorSize/2) 
    mouse.y.set(clientY-CursorSize/2) 
  }
  useEffect(()=>{
    window.addEventListener('mousemove',manageMouseMove)
    return ()=>{
      window.removeEventListener('mousemove',manageMouseMove)
    }
  })
  return (
    <motion.div 
    animate={{scale:scale}}
    transition={{duration:0.5}}
    className='Cursor' style={{left:smoothMouse.x, top:smoothMouse.y}}>

    </motion.div>
  )
}

export default StickyCursor