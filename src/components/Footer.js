import React from 'react'
import './Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className='footer'>
      
      <div className="footerLeft">
        <p>Copyright © 2021</p>
      </div>

      <div className="footerRight">

        <div className="whatsapp">
          <WhatsAppIcon />
        </div>
        <div className="insta">
          <InstagramIcon />
        </div>
        <div className="mail">
          <MailOutlineIcon />
        </div>

      </div>
    </div>
  )
}

export default Footer 