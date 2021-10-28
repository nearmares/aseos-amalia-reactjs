import React, { useState } from 'react'
import './Services.css'
import { motion } from 'framer-motion'

import { aseoGeneral, deepCleaning, Organizacion } from './servicesOptions' 

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

  const [ description, setdescription ] = useState(true)

  const [ showCard, setShowCard ] = useState(true) 

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

        
          { showCard ? (
            <div className="services__containerRight">

              <div className="services__descriptionTitle">
                {deepCleaning?.title}
              </div>

              <div className="services__descriptionOptions">
                <ul>
                  
                  {deepCleaning?.options.map( option => (
                    <li>{option}</li>
                  ))}

                </ul>
              </div>
            </div>
          ) : null}
      

      </div>

    </motion.div>
  )
}

export default Services
