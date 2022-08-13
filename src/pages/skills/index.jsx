import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsPatchCheckFill } from 'react-icons/bs';

import './skills.css';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id='skills'>
      <h5>{t('knowMore')}</h5>
      <h2>{t('aboutMySkills')}</h2>

      <div className="container skills__container">

        <div className="skills__frontend">
          <h3>{t('frontendTitle')}</h3>
          <div className="skills__content">

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>{t('intermediate')}</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>{t('intermediate')}</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>{t('intermediate')}</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Bootstrap5</h4>
                <small className='text-light'>{t('intermediate')}</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>{t('intermediate')}</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>{t('beginner')}</small>
              </div>
            </article>

          </div>
        </div>

        <div className="skills__backend">
          <h3>{t("backendTitle")}</h3>
          <div className="skills__content">

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{t('beginner')}</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{t('beginner')}</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills