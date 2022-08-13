import React from 'react';
import { useTranslation } from 'react-i18next';
import './testimonials.css';

import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit.'
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit.'  },
  {
    id: 3,
    image: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit.'  },
  {
    id: 4,
    image: AVTR4,
    name: 'Nana Ama',
    review: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit. Cum societat cupiditat non proident, consectetur adipiscing elit.'  }
]

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section id='testimonials'>
      <h5>{t('reviewClients')}</h5>
      <h2>{t('aboutMyTestimonials')}</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        Autoplay={2000}
      >
        {
          data.map(({ id, image, name, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="Client One" />
                </div>
                <h5 className='client__name'> {name} </h5>
                <small className='client__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials