import React from 'react'
import './Main.css'
import { motion } from 'framer-motion'

const mainVariants = {
  hidden: {
    opacity: 0,
    y: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 1}
  },
  exit: {
    y: 0,
    transition: {ease: 'easeInOut'}
  }
}


function Main() {
  return (
    <motion.div 
      variants={mainVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='main'
    >
      <div className='main__container'>

        <div className="main__containerName">
          <h1>Aseos <span>Amalia</span></h1>
        </div>

        <div className="main__containerSlogan">
          <p>Deja que nuestros expertos abrillanten tu espacio</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Main
