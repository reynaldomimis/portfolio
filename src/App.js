import React, { useEffect } from "react";
import { Main, Contact, Project, Specialization, Testimonial } from "./screens";
import AOS from "aos";
import { CScrollTop, CFooter, CClient } from "./components";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <CScrollTop />
      <Main id="main" />
      <Specialization id="specialization" />
      <Project id="project" />
      <CClient />
      <Testimonial id="testimonial" />
      <Contact id="contact" />
      <CFooter />
    </div>
  );
};

export default App;
