import { React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiBookOpen } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
//import { BsPeopleFill } from 'react-icons/bs';
import './nav.css';

const Nav = () => {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <NavLink
        to="/"
        title={t("home")}
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to="/about"
        title={t("about")}
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        to="/skills"
        title={t("skills")}
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BiBook />
      </NavLink>
      <NavLink
        to="/services"
        title={t("services")}
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </NavLink>
      <NavLink
        to="/portfolio"
        title={t('portfolio')}
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BiBookOpen />
      </NavLink>
      {/* <NavLink
        to="/testimonials"
        title={t('testimonials')}
        onClick={() => setActiveNav('#testimonials')}
        className={activeNav === '#testimonials' ? 'active' : ''}
      >
        <BsPeopleFill />
      </NavLink> */}
      <NavLink
        to="/contact"
        title={t("contact")}
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </NavLink>
    </nav>
  )
}

export default Nav