/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiBookOpen } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
//import { BsPeopleFill } from 'react-icons/bs';
import './nav.css';

const Nav = () => {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState('#');

  return (
    <>
      <nav>
        <a
          href="#"
          title={t("home")}
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          title={t("about")}
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          title={t("skills")}
          onClick={() => setActiveNav('#skills')}
          className={activeNav === '#skills' ? 'active' : ''}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          title={t("services")}
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <RiServiceLine />
        </a>
        <a
          href="#portfolio"
          title={t('portfolio')}
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <BiBookOpen />
        </a>
        {/* <a
          href="#testimonials"
          title={t('testimonials')}
          onClick={() => setActiveNav('#testimonials')}
          className={activeNav === '#testimonials' ? 'active' : ''}
        >
          <BsPeopleFill />
        </a> */}
        <a
          href="#contact"
          title={t("contact")}
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>

      <a 
        href="#footer" 
        className="scroll__down"
        onClick={() => setActiveNav('')}
      >
        {t("scrollDown")}
      </a>
    </>
  )
}

export default Nav