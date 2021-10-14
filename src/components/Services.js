import React from 'react'
import './Services.css'
import { motion } from 'framer-motion'

const servicesVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      type: 'spring',
      delay: 0.1, 
      duration: 1
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut'}
  }
}

function Services() {
  return (
    <motion.div 
      variants={servicesVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='services'
    >
      <div className="services__container">

        <div className="services__containerLeft">
          <div className="services__containerTitle">
            <p>Nuestros servicios:</p>
          </div>      

          <ul className="services__containerList">
            <li>Aseo general</li>
            <li>Deep Cleaning</li>
            <li>Organizacion de inventario</li>
          </ul>
        </div>

        <div className="services__containerRight">

        </div>

      </div>

    </motion.div>
  )
}

export default Services
