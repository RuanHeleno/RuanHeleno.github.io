import React from 'react'
import { useTranslation } from 'react-i18next';
import CV from '../../assets/CV.pdf'

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="cta">
        <a href={CV} className='btn' target='_blank' rel="noreferrer">Download Curriculum</a>
        <a href="#contact" className='btn btn-primary'>{t("phrase4")}</a>
    </div>
  )
}
export default CTA