import React from 'react';
import './footer.css';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="https://github.com/RuanHeleno" target="_blank" rel="noreferrer" className='footer__logo'>Ruan Heleno</a>

      <ul className="permalinks">
        <li><a href="#home">{t('menuHome')}</a></li>
        <li><a href="#about">{t('menuAbout')}</a></li>
        <li><a href="#skills">{t('menuSkills')}</a></li>
        <li><a href="#services">{t('menuServices')}</a></li>
        <li><a href="#Portfolio">{t('menuPortfolio')}</a></li>
        {/* <li><a href="#testimonials">{t('menuTestimonials')}</a></li> */}
        <li><a href="#contact">{t('menuContact')}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ruanheleno/" target="_blank" rel="noreferrer"> <BsLinkedin size={20} /> </a>
        <a href="https://github.com/RuanHeleno" target="_blank" rel="noreferrer"> <FaGithub size={20} /> </a>
        <a href="https://www.instagram.com/ruanhelenoof/" target="_blank" rel="noreferrer"> <BsInstagram size={20} /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ruan Heleno. {t('copyright')}</small>
      </div>
    </footer>
  )
}

export default Footer