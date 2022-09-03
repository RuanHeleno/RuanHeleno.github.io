import React from "react";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  Header,
  Nav,
  About,
  Skills,
  Services,
  Portfolio,
  /* Testimonials, */
  Contact,
  Footer,
} from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Skills />
                <Services />
                <Portfolio />
                {/* <Testimonials /> */}
                <Contact />
                <Footer />
              </>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
