import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Header,
  About,
  Skills,
  Services,
  Portfolio,
  /* Testiomials, */
  Contact,
  Footer,
  Layout
} from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="Services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/* <Route path="testimonials" element={<Testimonials />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App