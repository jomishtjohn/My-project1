import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>CATALYST</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>CATALYST Solutions</a></li>
        <li><a href='#experience'>CATALYST Science</a></li>
        <li><a href='#projects'>About CATALYST</a></li>
        <li><a href='#contact'>Customer Center</a></li>
        <li><a href='#contact'>Case Studies</a></li>
        <li><a href='#contact'>News</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/'><SiInstagram/></a>
        <a href='https://twitter.com/'><BsTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; CATALYST. All rights reserved.</small>
        <h3>Designed and Developed By</h3><span className='footer__name'>CATALYST</span> 
      </div>
    </footer>
  )
}

export default Footer