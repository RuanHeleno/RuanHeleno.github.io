import React from 'react';

import {
  Header,
  Nav,
  About,
  Skills,
  Services,
  Portfolio,
  /* Testimonials, */
  Contact,
  Footer
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