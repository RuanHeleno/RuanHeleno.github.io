import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
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
        <Link
          to="/"
          title={t("home")}
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </Link>
        <Link
          to="/about"
          title={t("about")}
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </Link>
        <Link
          to="/skills"
          title={t("skills")}
          onClick={() => setActiveNav('#skills')}
          className={activeNav === '#skills' ? 'active' : ''}
        >
          <BiBook />
        </Link>
        <Link
          to="/services"
          title={t("services")}
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <RiServiceLine />
        </Link>
        <Link
          to="/portfolio"
          title={t('portfolio')}
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          <BiBookOpen />
        </Link>
        {/* <Link
          to="/testimonials"
          title={t('testimonials')}
          onClick={() => setActiveNav('#testimonials')}
          className={activeNav === '#testimonials' ? 'active' : ''}
        >
          <BsPeopleFill />
        </Link> */}
        <Link
          to="/contact"
          title={t("contact")}
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </Link>
      </nav>

      <Link 
        to="/footer" 
        className="scroll__down"
        onClick={() => setActiveNav('')}
      >
        {t("scrollDown")}
      </Link>
    </>
  )
}

export default Nav