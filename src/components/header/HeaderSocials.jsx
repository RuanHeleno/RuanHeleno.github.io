import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ruanheleno/" target="_blank" rel="noreferrer"> <BsLinkedin size={20} /> </a>
        <a href="https://github.com/RuanHeleno" target="_blank" rel="noreferrer"> <FaGithub size={20} /> </a>
        <a href="https://www.instagram.com/ruanhelenoof/" target="_blank" rel="noreferrer"> <BsInstagram size={20} /> </a>
    </div>
  )
}

export default HeaderSocials