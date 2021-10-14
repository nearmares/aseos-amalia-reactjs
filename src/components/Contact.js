import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion'

const contactVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
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
    x: '100vw',
    transition: { ease: 'easeInOut'}
  }
}

function Contact() {

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <motion.div 
      variants={contactVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='contact'
    >
      <div className="contact__container">

        <div className="contact__containerLeft">
          <div className="contact__containerTitle">
            <p>Contacta con nosotros:</p>
          </div>

          <form onSubmit={handleSubmit} id='form' className="contact__containerForm">
            <label> Nombre: </label>
            <input type="text" />
            <label> Email: </label>
            <input type="email" />
            <label> Numero de contacto:</label>
            <input type="number" />
            <input className='send' type="submit"/>
          </form>
        </div>

        <div className="contact__containerRight">
          <label >Descripcion:</label>
          <textarea form='form' />
        </div>

      </div>
    </motion.div>
  )
}

export default Contact
