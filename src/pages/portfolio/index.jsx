import React from 'react';
import { useTranslation } from 'react-i18next';
import './portfolio.css';

import CartShopping from '../../assets/Projects/CartShopping.png';
import Covid19inWorld from '../../assets/Projects/Covid19inWorld.png';
import CurriculumVitae from '../../assets/Projects/CurriculumVitae.png';
import FrontEndMentor from '../../assets/Projects/FrontEndMentor.png';
import LandingPages from '../../assets/Projects/LandingPages.png';
import GithubSearchProfile from '../../assets/Projects/GithubSearchProfile.png';
import RescueGame from '../../assets/Projects/RescueGame.png';
import GeniusGame from '../../assets/Projects/GeniusGame.png';
import OldPortfolio from '../../assets/Projects/OldPortfolio.png';

const data = [
  {
    id: 1,
    image: CurriculumVitae,
    title: 'Curriculum Vitae',
    languages: ['HTML5', 'CSS3', 'Bootstrap5'],
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/CurriculumVitae',
    demo: 'https://curriculumvitaeruanheleno.netlify.app/'
  },
  {
    id: 2,
    image: CartShopping,
    title: 'Cart Shopping',
    languages: ['Javascript', 'React Js'],
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/Cart-shopping',
    demo: 'https://cartshoppingsystem.netlify.app/'
  },
  {
    id: 3,
    image: Covid19inWorld,
    title: 'Covid19',
    languages: ['Javascript', 'React Js'],
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/Covid19PWA',
    demo: 'https://covid19inworld.netlify.app/'
  },
  {
    id: 4,
    image: GithubSearchProfile,
    title: 'Github Search Profile',
    languages: ['Javascript', 'React Js'],
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/GitHubSearchProfile',
    demo: 'https://githubsearchprofiles.netlify.app/'
  },
  {
    id: 5,
    image: FrontEndMentor,
    languages: ['HTML5', 'CSS3', 'Bootstrap5'],
    title: 'Frontend Mentor',
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/FrontEndMentor',
    demo: 'https://frontendmentorchallengesrh.netlify.app/'
  },
  {
    id: 6,
    image: LandingPages,
    title: 'Landing Pages',
    languages: ['HTML5', 'CSS3', 'Bootstrap5'],
    github: 'https://github.com/RuanHeleno/LandingPages',
    demo: 'https://ladingpagesrh.netlify.app/'
  },
  {
    id: 7,
    image: RescueGame,
    title: 'Rescue Game',
    languages: ['HTML5', 'CSS3', 'Javascript', 'JQuery'],
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/RescueGame',
    demo: 'https://rescuegame.netlify.app/'
  },
  {
    id: 8,
    image: GeniusGame,
    title: 'Genius Game',
    languages: ['HTML5', 'CSS3', 'Javascript'],
    github: 'https://github.com/RuanHeleno/DIO-Projects/tree/main/GeniusGame',
    demo: 'https://geniuswebgame.netlify.app/'
  },
  {
    id: 9,
    image: OldPortfolio,
    title: 'Old Portfolio',
    languages: ['Javascript', 'React Js', 'Bootstrap5'],
    github: 'https://github.com/RuanHeleno/OldPortfolio',
    demo: 'https://oldportfoliorh.netlify.app/'
  }
]

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section id='portfolio'>
      <h5>{t('knowMore')}</h5>
      <h2>{t('aboutMyProjects')}</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, languages, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-imagem">
                  <img src={image} alt={title} />
                </div>
                <div className="portfolio__item-desc">
                  <h3>{title}</h3>
                  <p className="text-light">
                    {
                      languages.map((lang) => <span>{lang}</span>)
                    }
                  </p>
                  <div className="portfolio__item-cta">
                    <a href={github} target="_blank" rel="noreferrer" className='btn'>Github</a>
                    <a href={demo} target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio