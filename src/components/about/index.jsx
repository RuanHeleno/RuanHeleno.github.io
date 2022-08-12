import React from 'react';
import './about.css';
import ME from '../../assets/eu.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about'>
      <h5>{t('knowMore')}</h5>
      <h2>{t('aboutMe')}</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t('experience')}</h5>
              <small>{t('experienceDesc')}</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>{t('clients')}</h5>
              <small>{t('clientsDesc')}</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t('projects')}</h5>
              <small>{t('projectsDesc')}</small>
            </article>
          </div>

          <p>
            {t('aboutMeP')}
          </p>

          <a href="#contact" className='btn btn-primary'>{t('contactBtn')}</a>
        </div>
      </div>
    </section>
  )
}

export default About