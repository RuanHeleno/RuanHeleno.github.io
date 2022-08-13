import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/nav';
import {
  Header,
  About,
  Skills,
  Services,
  Portfolio,
  /* Testimonials */
  Contact,
  Footer
} from './pages';

const App = () => {
  return (
    <MemoryRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        {/* <Route path='/testimonials' element={<Testimonials />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </MemoryRouter>
  )
}

export default App