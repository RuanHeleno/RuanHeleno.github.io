import React from 'react';

import Nav from './components/nav';
import {
  Header,
  About,
  Skills,
  Services,
  Portfolio,
  /* Testiomials, */
  Contact,
  Footer,
} from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App