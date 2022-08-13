import React from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'react-ts-typewriter';

import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import LanguageSwitcher from '../../components/languageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id='home'>
      <LanguageSwitcher />
      <div className="container header__container">
        <h5>{t("phrase1")}</h5>
        <h1>
          <Typewriter 
            text='Ruan Heleno' 
            speed='2'
            delay='1000'
            loop='true'
          />
        </h1>

        <p className="text-light">{t('phrase2')}</p>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>

      <a href="#contact" className="scroll__down">{t("scrollDown")}</a>
    </header>
  )
}

export default Header