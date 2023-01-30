import React from "react";
import {
  BrowserRouter as Router,
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
              </>
            }
          >
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
