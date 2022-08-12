import React from 'react';
import { useTranslation } from 'react-i18next';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  const { t } = useTranslation();
  
  return (
    <section id='services'>
      <h5>{t('knowMore')}</h5>
      <h2>{t('aboutMyJobs')}</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>{t('cardOneTitle')}</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('cardOneTopic1')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('cardOneTopic2')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('cardOneTopic3')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('cardOneTopic4')}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>{t('cardOneTopic5')}</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services