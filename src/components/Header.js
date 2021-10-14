import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { motion } from 'framer-motion'

const headerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 1.5}
  },
}


function Header() {
  return (
    <motion.div 
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      className='header'
    >

      <div className="header__left">
        <Link to='/'>
          <motion.button 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1.2}}
          >Inicio</motion.button>
        </Link>
      </div>

      <div className="header__right">
        <Link to='/contact'>
          <motion.button
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{delay: 1.6}}
          >Contacto</motion.button>
        </Link>

        <Link to='/services'>
          <motion.button
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{delay: 2}}
          >Servicios</motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Header
