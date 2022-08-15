import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './contact.css';
import { MdOutlineEmail, MdDangerous } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { BiMessageCheck } from 'react-icons/bi';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    let success = document.getElementById("success");
    let fail = document.getElementById("fail");

    emailjs.sendForm('service_nwmqr5e', 'template_kb6enyw', form.current, 'user_WpsHG7ueTwFTdqXhLd62Y')
      .then(() => {
        if (fail.style.visibility === "visible") fail.style.visibility = "hidden";
        success.style.visibility = 'visible';
      }, () => {
        if (success.style.visibility === "visible") success.style.visibility = "hidden";
        fail.style.visibility = 'visible';
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>{t('getInTouch')}</h5>
      <h2>{t('contactMe')}</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ruanheleno.dev@gmail.com</h5>
            <a href="mailto:ruanheleno.dev@gmail.com" target="_blank" rel="noreferrer">{t('emailLink')}</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Ruan Heleno</h5>
            <a href="https://m.me/RuanHelenoRV" target="_blank" rel="noreferrer">{t('messengerLink')}</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 73 9816-6483</h5>
            <a href="https://api.whatsapp.com/send?phone=5573998166483" target="_blank" rel="noreferrer">{t('whatsappLink')}</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('fullName')} required />
          <input type="email" name='email' placeholder={t('email')} required />
          <textarea name="message" rows="7" placeholder={t('message')} required></textarea>

          <button type="submit" className='btn btn-primary'>{t('sendMessage')}</button>

          <p id='success'> <BiMessageCheck className='form-icon' /> {t("success")} </p>
          <p id='fail'> <MdDangerous className='form-icon' /> {t("fail")} </p>
        </form>

      </div>
    </section>
  )
}

export default Contact